import React from "react";

type Props = {
  children: React.ReactNode;
};

const ChatLayout = ({ children }: Props) => {
  return <div className="mx-auto max-w-4xl w-full h-full">{children}</div>;
};

export default ChatLayout;
