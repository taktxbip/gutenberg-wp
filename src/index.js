import { registerBlockType } from "@wordpress/blocks";

registerBlockType("dev/myblock", {
  edit: () => {
    return <h1 className="admin-title">Edit</h1>;
  },
  save: () => {
    return <h1 className="admin-title">Save</h1>;
  }
});