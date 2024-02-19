import { Grid } from "@mui/material";
import BaseButton from "base/components/BaseButton";
import Panel from "./Panel";

import { IdName } from "types/common";

interface Props {
  fields: IdName[];
  selectedField: string | number | undefined;
  onSelectField: (field: string | number) => void;
}

export default function Fields({
  fields,
  selectedField,
  onSelectField,
}: Props) {
  return (
    <Panel title="분야">
      <Grid container spacing={2}>
        {fields.map((field) => (
          <Grid key={field.id} item xs={6}>
            <BaseButton
              variant={selectedField === field.id ? "contained" : "outlined"}
              sx={{ width: "100%", height: 44 }}
              onClick={() => onSelectField(field.id)}
            >
              {field.name}
            </BaseButton>
          </Grid>
        ))}
      </Grid>
    </Panel>
  );
}
