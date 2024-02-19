import { useState, useEffect, useMemo } from "react";
import { Box, Typography, Grid } from "@mui/material";
import { IdName } from "types/common";
import { MailTemplateListItem } from "types/mail-template/list";
import { CategoryDetailData } from "types/category/view";
import Fields from "./Fields";
import Reviewers from "./Reviewers";
import { useGetCategoryView } from "setting/hooks/useCategory";

interface Props {
  list: IdName[];
}

const Body = ({ list }: Props) => {
  const [selectedField, setSelectedField] = useState<string | number>("");
  const [currentFieldData, setCurrentFieldData] =
    useState<CategoryDetailData>();

  useEffect(() => {
    if (!selectedField && list) {
      setSelectedField(list[0]?.id);
    }
  }, [list]);

  const params = useMemo(() => {
    return {
      id: selectedField?.toString(),
      reviewer: 1,
    };
  }, [selectedField]);

  const { data: reviewerList, isLoading } = useGetCategoryView(params, {
    enabled: !!selectedField,
  });

  useEffect(() => {
    if (reviewerList && reviewerList.rows) {
      setCurrentFieldData(reviewerList.rows);
    }
  }, [reviewerList]);

  const onSelectField = (field: string | number) => {
    setSelectedField(field);
  };

  return (
    <Box>
      <Grid container spacing={2} sx={{ minHeight: 700, height: 700 }}>
        <Grid item xs={6} sx={{ height: "100%" }}>
          <Fields
            fields={list}
            selectedField={selectedField}
            onSelectField={onSelectField}
          />
        </Grid>
        <Grid item xs={6} sx={{ height: "100%" }}>
          <Reviewers data={currentFieldData?.reviewers} isLoading={isLoading} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Body;
