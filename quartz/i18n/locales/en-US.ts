import { Translation } from "./definition"

export default {
  propertyDefaults: {
    title: "Untitled",
    description: "No description provided",
  },
  components: {
    callout: {
      note: "Note",
      abstract: "Abstract",
      info: "Info",
      todo: "Todo",
      tip: "Tip",
      success: "Success",
      question: "Question",
      warning: "Warning",
      failure: "Failure",
      danger: "Danger",
      bug: "Bug",
      example: "Example",
      quote: "Quote",
    },
    backlinks: {
      title: "backlinks",
      noBacklinksFound: "no backlinks found",
    },
    themeToggle: {
      lightMode: "light mode",
      darkMode: "dark mode",
    },
    explorer: {
      title: "explorer",
    },
    footer: {
      createdWith: "Created with",
    },
    graph: {
      title: "graph view",
    },
    recentNotes: {
      title: "recent notes",
      seeRemainingMore: ({ remaining }) => `See ${remaining} more →`,
    },
    transcludes: {
      transcludeOf: ({ targetSlug }) => `Transclude of ${targetSlug}`,
      linkToOriginal: "Link to original",
    },
    search: {
      title: "search",
      searchBarPlaceholder: "Search for something",
    },
    tableOfContents: {
      title: "table of contents",
    },
    contentMeta: {
      readingTime: ({ minutes }) => `${minutes} minute read`,
    },
  },
  pages: {
    rss: {
      recentNotes: "recent notes",
      lastFewNotes: ({ count }) => `Last ${count} notes`,
    },
    error: {
      title: "not Found",
      notFound: "either this page is private or doesn't exist.",
    },
    folderContent: {
      folder: "folder",
      itemsUnderFolder: ({ count }) =>
        count === 1 ? "1 item under this folder." : `${count} items under this folder.`,
    },
    tagContent: {
      tag: "Tag",
      tagIndex: "Tag Index",
      itemsUnderTag: ({ count }) =>
        count === 1 ? "1 item with this tag." : `${count} items with this tag.`,
      showingFirst: ({ count }) => `showing first ${count} tags.`,
      totalTags: ({ count }) => `found ${count} total tags.`,
    },
  },
} as const satisfies Translation
