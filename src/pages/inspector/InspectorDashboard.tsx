import { motion } from 'framer-motion';

export function InspectorDashboard() {
  const stats = [
    { label: 'Today\'s Inspections', value: '5', change: '+1', icon: '🔍' },
    { label: 'This Week', value: '23', change: '+3', icon: '📅' },
    { label: 'Pending Reviews', value: '7', change: '-2', icon: '📝' },
    { label: 'Total Earnings', value: '$12,840', change: '+8%', icon: '💰' },
  ];

  const upcomingInspections = [
    { id: 1, client: 'ABC Corp', location: '123 Main St', time: '10:00 AM', status: 'scheduled' },
    { id: 2, client: 'XYZ Industries', location: '456 Oak Ave', time: '2:00 PM', status: 'scheduled' },
    { id: 3, client: 'Tech Solutions', location: '789 Pine Rd', time: '4:30 PM', status: 'confirmed' },
  ];

  return (
    <div className="dashboard-content">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="dashboard-header">
          <h1>Inspector Dashboard</h1>
          <p>Manage your inspections and track your progress.</p>
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
            className="card inspection-card"
          >
            <div className="card-header">
              <h2>Today's Schedule</h2>
              <button className="btn-secondary">View Calendar</button>
            </div>
            <div className="inspection-list">
              {upcomingInspections.map((inspection, index) => (
                <motion.div
                  key={inspection.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="inspection-item"
                  whileHover={{ x: 4 }}
                >
                  <div className="inspection-time">{inspection.time}</div>
                  <div className="inspection-details">
                    <div className="inspection-client">{inspection.client}</div>
                    <div className="inspection-location">{inspection.location}</div>
                  </div>
                  <div className={`inspection-status ${inspection.status}`}>
                    {inspection.status}
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
                <span className="action-icon">📝</span>
                <span>New Report</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="action-btn"
              >
                <span className="action-icon">📅</span>
                <span>View Schedule</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="action-btn"
              >
                <span className="action-icon">📊</span>
                <span>Analytics</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
