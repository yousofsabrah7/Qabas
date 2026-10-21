
import Management from "./Management";

export default function ManagementEmpty(props) {
  return (
    <Management
      {...props}
      initialHasProject={false}
    />
  );
}
