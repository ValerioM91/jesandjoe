import React from "react"
import { BuilderComponent, builder, useIsPreviewing } from "@builder.io/react"
import DefaultErrorPage from "next/error"
import Head from "next/head"
import type { BuilderContent } from "@builder.io/sdk"
import type { GetStaticProps } from "next"
import "../builder-registry"
import Header from "@/sections/Header"

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!)

// Define a function that fetches the Builder
// content for a given page
export const getStaticProps: GetStaticProps = async ({ params }) => {
  // Fetch the builder content for the given page
  const page = await builder
    .get("page", {
      userAttributes: {
        urlPath: "/" + ((params?.page as string[])?.join("/") || ""),
      },
    })
    .toPromise()

  // Return the page content as props
  return {
    props: {
      page: page || null,
    },
    // Revalidate the content every 5 seconds
    revalidate: 1,
  }
}

// Define a function that generates the
// static paths for all pages in Builder
export async function getStaticPaths() {
  // Get a list of all pages in Builder
  const pages = await builder.getAll("page", {
    // We only need the URL field
    fields: "data.url",
    options: { noTargeting: true },
  })

  // Generate the static paths for all pages in Builder
  return {
    paths: pages.map(page => String(page.data?.url)),
    fallback: "blocking",
  }
}

// Define the Page component
export default function Page({ page }: { page: BuilderContent | null }) {
  const isPreviewing = useIsPreviewing()

  // If the page content is not available
  // and not in preview mode, show a 404 error page
  if (!page && !isPreviewing) {
    return <DefaultErrorPage statusCode={404} />
  }

  const sectionsNames = page?.data?.blocks?.map(block => block?.component?.name)

  // If the page content is available, render
  // the BuilderComponent with the page content
  return (
    <>
      <Head>
        <title>{page?.data?.title}</title>
      </Head>
      {/* Render the Builder page */}
      <Header sectionsNames={sectionsNames} />
      <BuilderComponent model="page" content={page || undefined} />
    </>
  )
}
