import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";

import IconButton from "./IconButton";
import styles from "../form.module.css";
import { Edit } from "@mui/icons-material";
import FormFileFieldEditSelectedList from "./FormFileFieldEditSelectedList";

type FormFileFieldSelectedListT = {
  value: Array<string>;
  onRemoveFile: (fileURL: string) => void;
};

const FormFileFieldSelectedList: React.FC<FormFileFieldSelectedListT> = ({
  value,
  onRemoveFile,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={styles.chosenMediaContainer}>
        <IconButton width="40px" height="40px" onClick={() => setOpen(true)}>
          <Edit />
        </IconButton>

        {value[0] &&
          value.slice(0, 6).map((base64, index) => (
            <figure key={nanoid()} className={styles.chosenMediaFig}>
              <img src={base64} alt="property" />
              {value.length > 6 && index === 5 && (
                <span className={styles.extraAssetsLayout}>
                  +{value.length - 6}
                </span>
              )}
            </figure>
          ))}
      </div>

      <FormFileFieldEditSelectedList
        value={value}
        open={open}
        setOpen={setOpen}
        onRemoveFile={onRemoveFile}
      />
    </>
  );
};

export default FormFileFieldSelectedList;
