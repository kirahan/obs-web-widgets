import { ElMessageBox, ElMessage } from "element-plus";

export const openMsgbox = (info: any) => {
  // //console.log(info);
  if (info.type == "alert") {
    ElMessageBox.alert(info.msg, "", {
      title: info.title,
      confirmButtonText: info.yes,
      cancelButtonText: info.cancel,
      showClose: true,
      showCancelButton: Boolean(info.cancel),
      customClass: info.customClass || "myBox",
      confirmButtonClass: info.cancel ? "yes" : "sure",
      cancelButtonClass: "cancel",
      callback: (action: string) => {
        // //console.log("1234");
        // //console.log(action);
        if (action === "confirm") {
          info.yesFn();
        } else {
          info.cancelFn();
        }
      },
    });
  } else {
    ElMessageBox.confirm(info.msg, "", {
      title: info.title,
      confirmButtonText: info.yes,
      cancelButtonText: info.cancel,
      showClose: true,
      showCancelButton: Boolean(info.cancel),
      customClass: info.customClass || "myBox",
      confirmButtonClass: info.cancel ? "yes" : "sure",
      cancelButtonClass: "cancel",
      callback: (action: string) => {
        // //console.log("1234");
        // //console.log(action);
        if (action === "confirm") {
          info.yesFn();
        } else {
          info.cancelFn();
        }
      },
    });
  }
};
