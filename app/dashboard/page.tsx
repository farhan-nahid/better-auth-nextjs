// import { auth } from "@/lib/auth";

import { DashboardWrapper } from "./_components/dashboard-wrapper";

export default function DashboardPage() {
  // const [session, activeSessions, deviceSessions, organization] =
  // 	await Promise.all([
  // 		auth.api.getSession({
  // 			headers: await headers(),
  // 		}),
  // 		auth.api.listSessions({
  // 			headers: await headers(),
  // 		}),
  // 		auth.api.listDeviceSessions({
  // 			headers: await headers(),
  // 		}),
  // 		auth.api.getFullOrganization({
  // 			headers: await headers(),
  // 		}),
  // 	]).catch((e) => {
  // 		throw redirect("/sign-in");
  // 	});
  return (
    <div className="w-full">
      <div className="flex gap-4 flex-col">
        <DashboardWrapper />

        {/* <AccountSwitcher
					sessions={JSON.parse(JSON.stringify(deviceSessions))}
				/>
				<UserCard
					session={JSON.parse(JSON.stringify(session))}
					activeSessions={JSON.parse(JSON.stringify(activeSessions))}
				/>
				<OrganizationCard
					session={JSON.parse(JSON.stringify(session))}
					activeOrganization={JSON.parse(JSON.stringify(organization))}
				/> */}
      </div>
    </div>
  );
}
