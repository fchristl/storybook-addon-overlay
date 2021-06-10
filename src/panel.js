import { addons, types } from "@storybook/addons";
import { useGlobals } from "@storybook/api";
import { AddonPanel, Button, FilesControl, Table } from "@storybook/components";
import React, { useState } from "react";

const ADDON_ID = "storybook-addon-overlay";
const PANEL_ID = `${ADDON_ID}/panel`;

const OverlayPanel = () => {
  const [global, updateGlobal] = useGlobals();
  const [files, setFiles] = useState([]);

  function onFileSelected(filesSelected) {
    if (!filesSelected) {
      updateGlobal({ overlay: undefined });
      setFiles([]);
      return;
    }
    setFiles(filesSelected);
    updateGlobal({ overlay: filesSelected[0] });
  }

  return (
    <div style={{ padding: "12px" }}>
      Add an image overlay to your stories to align them accurately with your
      design.
      <Table width="100%">
        {!global.overlay && (
          <tr>
            <th>Select an image file to overlay stories with:</th>
            <td>
              <FilesControl
                type="file"
                onChange={(e) => onFileSelected(e)}
                value={files}
              />
            </td>
          </tr>
        )}
        {global.overlay && (
          <tr>
            <td>
              <Button primary onClick={() => onFileSelected(undefined)}>
                Reset overlay
              </Button>
            </td>
          </tr>
        )}
      </Table>
      {!global.overlay && <></>}
    </div>
  );
};

addons.register(ADDON_ID, (api) => {
  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: "Overlay",
    render: ({ active, key }) => (
      <AddonPanel active={active} key={key}>
        <OverlayPanel />
      </AddonPanel>
    ),
  });
});
