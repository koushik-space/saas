import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function Dashboard() {
  const dashboardData = [
    { title: "Total Tasks", count: 120 },
    { title: "Completed", count: 75 },
    { title: "Pending", count: 30 },
    { title: "Overdue", count: 15 },
  ];

  return (
    <div className="p-8">

      {/* Welcome Section */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold">
            Dashboard Overview
          </h1>
          <p className="text-muted-foreground mt-1">
            Welcome back! Here's what's happening today.
          </p>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

        {dashboardData.map((item) => (
          <Card key={item.title}>
            <CardHeader>
              <CardTitle className="text-sm font-medium">
                {item.title}
              </CardTitle>
            </CardHeader>

            <CardContent>
              <h2 className="text-3xl font-bold">
                {item.count}
              </h2>
            </CardContent>
          </Card>
        ))}

      </div>

    </div>
  );
}

export default Dashboard;