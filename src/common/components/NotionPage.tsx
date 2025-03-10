import Head from "next/head";
import { type ExtendedRecordMap } from "notion-types";
import { getPageTitle } from "notion-utils";
import { NotionRenderer } from "react-notion-x";

export function NotionPage({ recordMap, rootPageId }: { recordMap: ExtendedRecordMap; rootPageId?: string }) {
  if (!recordMap) {
    return null;
  }

  const title = getPageTitle(recordMap);

  return (
    <>
      <Head>
        <meta name="description" content="React Notion X Minimal Demo" />

        <title>{title}</title>
      </Head>

      <NotionRenderer recordMap={recordMap} fullPage={true} darkMode={false} rootPageId={rootPageId} />
    </>
  );
}
