import { useGetOrg } from "base/hooks/org/useGetOrg";
import { Department, OrgConfig } from "types/org";

export const orgDepartmentConfig: OrgConfig = {
  init: {
    getParams: (keyword = "") => ({
      checkmenu: "",
      contact: 1,
      // favorite_default: 1,
      id: "",
      // is_favorite: 1,
      keyword: keyword,
      notcheckmail: 0,
      selectGroupbExpanded: false,
      // smsfax: 0,
      tree: "dynatree",
      retire: true,
    }),
    api: useGetOrg,
    getValue: (rows: any) => {
      return optimizeDepartments(rows);
    },
    // getValue: getInitValueWithFavorite
  },
  expand: {
    getParams: (idURL = "", keyword = "") => {
      return {
        contact: 1,
        keyword: keyword,
        notcheckmail: 0,
        selectGroupbExpanded: false,
        smsfax: 0,
        tree: "dynatree",
        idURL: idURL,
      };
    },
    api: useGetOrg,
    getValue: (rows: any) => {
      return optimizeDepartments(rows);
    },
    // getValue: getExpandValueWithFavorite
  },
};

export const optimizeDepartments = (departments: Department[] = []) => {
  const departmentModel = departments.map((item: Department) => {
    let itemNew = {
      ...item,
      isFolder: item.isFolder || item.type === "folder",
      key: item.key || item.id,
      id: item.key || item.id,
      // id: uuidv4(),
      isLazy: item.isLazy || item.leaf === false,
      title: item.title || item.text || item.name,
      name: item.title || item.text || item.name,
    };
    if (itemNew.children) {
      itemNew.children = optimizeDepartments(itemNew.children);
    }
    return itemNew;
  });
  return departmentModel;
};
