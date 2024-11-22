import ResetPassword from "@/components/reset/ResetPassword";

export async function generateStaticParams() {
  const tokenids = [ '123', '2', '3' ]

  return tokenids.map((tokenid) => ({
    tokenid,
  }));
}

export default async function ResetPasswordPage({params}) {

  const { tokenid } = await params;

  return (
    <div className="flex items-center justify-center mt-28">
      <ResetPassword link={tokenid} />
    </div>
  )
}