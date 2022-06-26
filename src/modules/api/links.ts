import { LinkCollectionResource } from "@/types";
import { client } from "./";
import { LoadMany } from "./types";

const loadLinks: LoadMany<LinkCollectionResource> = () => client.get(`links`);

export { loadLinks }