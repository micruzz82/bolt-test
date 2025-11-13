import { motion } from 'framer-motion';

export function ClientDashboard() {
  const stats = [
    { label: 'Active Projects', value: '12', change: '+2', icon: '📁' },
    { label: 'Pending Reports', value: '3', change: '-1', icon: '📄' },
    { label: 'Total Inspections', value: '48', change: '+5', icon: '🔍' },
    { label: 'This Month', value: '$8,420', change: '+12%', icon: '💰' },
  ];

  const recentActivity = [
    { id: 1, title: 'Inspection Report #4905', status: 'Completed', time: '2 hours ago' },
    { id: 2, title: 'New Project Created', status: 'Active', time: '5 hours ago' },
    { id: 3, title: 'Payment Processed', status: 'Completed', time: '1 day ago' },
  ];

  return (
    <div className="dashboard-content">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="dashboard-header">
          <h1>Client Dashboard</h1>
          <p>Welcome back! Here's what's happening with your projects.</p>
        </div>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className="stat-card"
            >
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-content">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
                <div className="stat-change positive">{stat.change}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="content-grid">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="card"
          >
            <div className="card-header">
              <h2>Recent Activity</h2>
              <button className="btn-secondary">View All</button>
            </div>
            <div className="activity-list">
              {recentActivity.map((activity, index) => (
                <motion.div
                  key={activity.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="activity-item"
                >
                  <div className="activity-content">
                    <div className="activity-title">{activity.title}</div>
                    <div className="activity-time">{activity.time}</div>
                  </div>
                  <div className={`activity-status ${activity.status.toLowerCase()}`}>
                    {activity.status}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="card"
          >
            <div className="card-header">
              <h2>Quick Actions</h2>
            </div>
            <div className="quick-actions">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="action-btn"
              >
                <span className="action-icon">➕</span>
                <span>New Project</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="action-btn"
              >
                <span className="action-icon">📄</span>
                <span>View Reports</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="action-btn"
              >
                <span className="action-icon">💬</span>
                <span>Contact Inspector</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
