import { Button } from "@/components";
import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [{ title: "Ana Səhifə" }, { name: "description", content: "Ana səhifəyə xoş gəldiniz!" }];
};

export default function Index() {
  return (
    <div className="grid min-h-screen place-items-center text-xl font-semibold">
      <div className="flex flex-col items-center gap-3">
        <span>LANDING PAGE</span>
        <Link to="/signup">
          <Button variant="secondary">Go To Sign up Page</Button>
        </Link>
        <Link to="/login">
          <Button variant="secondary">Go To Log in Page</Button>
        </Link>
      </div>
    </div>
  );
}
