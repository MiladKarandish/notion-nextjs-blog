import NotionRendererProvider from "@/common/components/NotionRenderer";
import { notion } from "@/lib/notion";

export default async function Post({ params }: { params: Promise<{ pageId: string }> }) {
  const pageId = (await params).pageId;

  const recordMap = await notion.getPage(pageId);

  return <NotionRendererProvider recordMap={recordMap} />;
}
