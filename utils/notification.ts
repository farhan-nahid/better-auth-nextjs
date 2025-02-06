import { toast } from "sonner";

type PropsType = {
  title?: string;
  description: any;
};

export function openSuccessNotification({ title = "Success", description = "Successfully" }: PropsType) {
  return toast.success(title, { description: description, duration: 5000 });
}

export function openErrorNotification({ title = "Error", description = "Something Went wrong" }: PropsType) {
  return toast.error(title, { description: description, duration: 5000, });
}