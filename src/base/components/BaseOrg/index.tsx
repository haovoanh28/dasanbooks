import { Tree } from "react-arborist";
import OrgNode from "./Node";

const data = [
  { id: "1", name: "Unread" },
  { id: "2", name: "Threads" },
  {
    id: "3",
    name: "Chat Rooms",
    children: [
      {
        id: "c1",
        name: "General",
        children: [
          { id: "e1", name: "Alice" },
          { id: "e2", name: "Bob" },
          { id: "e3", name: "Charlie" },
        ],
      },
      { id: "c2", name: "Random" },
      { id: "c3", name: "Open Source Projects" },
    ],
  },
  {
    id: "4",
    name: "Direct Messages",
    children: [
      { id: "d1", name: "Alice" },
      { id: "d2", name: "Bob" },
      { id: "d3", name: "Charlie" },
    ],
  },
];

export default function BaseOrg() {
  return (
    <Tree data={data} openByDefault={false} rowHeight={36} indent={32}>
      {OrgNode}
    </Tree>
  );
}
