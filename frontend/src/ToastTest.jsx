import { Button, useToast } from "@chakra-ui/react";

function ToastTest() {
  const toast = useToast();
  return (
    <Button
      onClick={() => toast({ title: "成功测试 useToast", status: "success" })}
    >
      点我测试 Toast
    </Button>
  );
}

export default ToastTest;