import { useState, useEffect, Fragment, memo } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Link,
} from "@mui/material";
import { List as ListIcon, ExpandLess, ExpandMore } from "@mui/icons-material";

import NAV_ROUTES from "./nav-routes";

const NavLinks = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [expandMap, setExpandMap] = useState<{
    [key: number]: boolean;
  }>({});

  useEffect(() => {
    NAV_ROUTES.forEach(({ isExpand, href }, idx) => {
      // Init expandMap for expandable routes
      if (isExpand) {
        const isMatched = location.pathname.startsWith(href);
        setExpandMap((prev) => ({ ...prev, [idx]: isMatched ? true : false }));
      }
    });
  }, []);

  const renderExpandIcon = (isExpand: boolean | undefined, index: number) => {
    if (!isExpand) return null;
    return expandMap[index] ? <ExpandLess /> : <ExpandMore />;
  };

  console.log("location ==> ", location.pathname);

  return (
    <>
      {NAV_ROUTES.map(({ text, href, icon: Icon, isExpand, subLinks }, idx) => (
        <Fragment key={href}>
          <ListItem disablePadding>
            <ListItemButton
              selected={location.pathname === href}
              onClick={() => {
                if (!isExpand) {
                  navigate(href);
                }
                setExpandMap({ ...expandMap, [idx]: !expandMap[idx] });
              }}
            >
              <ListItemIcon>{Icon && <Icon />}</ListItemIcon>
              <ListItemText primary={text} />
              {renderExpandIcon(isExpand, idx)}
            </ListItemButton>
          </ListItem>

          {subLinks && (
            <Collapse in={expandMap[idx]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {subLinks.map(({ text, href, icon: Icon }) => (
                  <ListItem key={text} disablePadding>
                    <ListItemButton
                      sx={{ pl: 4 }}
                      selected={location.pathname === href}
                      onClick={() => {
                        navigate(href);
                      }}
                    >
                      <ListItemIcon>{Icon && <Icon />}</ListItemIcon>
                      <ListItemText primary={text} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Collapse>
          )}
        </Fragment>
      ))}
    </>
  );
};

export default memo(NavLinks);
