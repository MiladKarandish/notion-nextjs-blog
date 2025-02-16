import NotionRendererProvider from "@/common/components/NotionRenderer";
import { notion } from "@/lib/notion";

export default async function Home() {
  const recordMap = await notion.getPage("19cd1511468781f68dc1cf8e28ddbc52");

  console.log(recordMap);

  return <NotionRendererProvider recordMap={recordMap} />;
}
