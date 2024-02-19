import { useState, useEffect } from "react";
import { Box, Typography, Grid } from "@mui/material";
import { IdName } from "types/common";
import { MailTemplateListItem } from "types/mail-template/list";
import { CategoryDetailData } from "types/category/view";
import Fields from "./Fields";
import Reviewers from "./Reviewers";

interface Props {
  list: IdName[];
}

const Body = ({ list }: Props) => {
  const [selectedField, setSelectedField] = useState<string | number>();
  const [currentFieldData, setCurrentFieldData] =
    useState<CategoryDetailData>();
  const [isLoadingDetail, setIsLoadingDetail] = useState<boolean>(false);

  useEffect(() => {
    if (!selectedField && list) {
      setSelectedField(list[0].id);
    }
  }, [list]);

  useEffect(() => {
    if (selectedField) {
      setCurrentFieldData(undefined);
      setIsLoadingDetail(true);
      // getCategoryDetail(selectedField).then((res) => {
      //   setCurrentFieldData(res.rows);
      //   setIsLoadingDetail(false);
      // });
    }
  }, [selectedField]);

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
          <Reviewers
            data={currentFieldData?.reviewers}
            isLoading={isLoadingDetail}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Body;
