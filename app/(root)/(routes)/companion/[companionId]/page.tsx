import prismadb from "@/lib/prismadb";
import React from "react";
import { auth, redirectToSignIn } from "@clerk/nextjs";

import CompanionForm from "./components/CompanionForm";

interface CompanionPageProps {
  params: {
    companionId: string;
  };
}

const CompanionPage = async ({ params }: CompanionPageProps) => {
  const { userId } = auth();
  // TODO:Check Subscription

  if (!userId) {
    return redirectToSignIn();
  }

  const companion = await prismadb.companion.findUnique({
    where: {
      id: params.companionId,
      userId,
    },
  });

  const categories = await prismadb.category.findMany();
  return <CompanionForm initialData={companion} categories={categories} />;
};

export default CompanionPage;
