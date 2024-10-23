export default function ComplexDashboardLayout({
  children,
  admin,
  notification,
  users,
}: {
  children: React.ReactNode;
  admin: React.ReactNode;
  notification: React.ReactNode;
  users: React.ReactNode;
}) {
  return (
    <div>
      <h1>{children}</h1>
      <div>{admin}</div>
      <div>{users}</div>
      <div>{notification}</div>
    </div>
  );
}
