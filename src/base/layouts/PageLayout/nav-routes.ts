import { HomeOutlined, BarChartOutlined } from "@ant-design/icons";
import {
  List as ListIcon,
  Description,
  ManageHistory,
  Email,
  ManageAccounts,
} from "@mui/icons-material";
import { MANUSCRIPT_URL } from "manuscript/constants";
import { SUBMISSION_URL } from "submission/constants";
import { SETTING_URL } from "setting/constants";

interface LinkType {
  text: string;
  href: string;
  icon?: React.ElementType;
  isExpand?: boolean;
  subLinks?: LinkType[];
}

const LINKS: LinkType[] = [
  { text: "Home", href: "/", icon: HomeOutlined },
  { text: "대시보드", href: "/dashboard", icon: BarChartOutlined },
  {
    text: "원고 투고 목록",
    href: `/${MANUSCRIPT_URL}`,
    icon: ListIcon,
    isExpand: true,
    subLinks: [
      {
        text: "All Manuscripts",
        href: `/${MANUSCRIPT_URL}/all`,
        icon: Description,
      },
      {
        text: "My Manuscripts",
        href: `/${MANUSCRIPT_URL}/my`,
        icon: Description,
      },
    ],
  },
  {
    text: "원고 투고 목록",
    icon: ManageHistory,
    href: `/${SETTING_URL}`,
    isExpand: true,
    subLinks: [
      {
        text: "메일 템플릿",
        href: `/${SETTING_URL}/mail-template`,
        icon: Email,
      },
      {
        text: "분야별 담당자 지정",
        href: `/${SETTING_URL}/user-assignment`,
        icon: ManageAccounts,
      },
    ],
  },
];

export default LINKS;
