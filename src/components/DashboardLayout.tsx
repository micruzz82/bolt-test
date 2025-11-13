import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { profile, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate('/login');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const menuItems = profile?.role === 'client'
    ? [
        { label: 'Dashboard', path: '/dashboard/client', icon: '📊' },
        { label: 'Projects', path: '/dashboard/client/projects', icon: '📁' },
        { label: 'Reports', path: '/dashboard/client/reports', icon: '📄' },
        { label: 'Settings', path: '/dashboard/client/settings', icon: '⚙️' },
      ]
    : [
        { label: 'Dashboard', path: '/dashboard/inspector', icon: '📊' },
        { label: 'Inspections', path: '/dashboard/inspector/inspections', icon: '🔍' },
        { label: 'Schedule', path: '/dashboard/inspector/schedule', icon: '📅' },
        { label: 'Settings', path: '/dashboard/inspector/settings', icon: '⚙️' },
      ];

  return (
    <div className="dashboard-container">
      <AnimatePresence>
        {sidebarOpen && (
          <motion.aside
            initial={{ x: -280 }}
            animate={{ x: 0 }}
            exit={{ x: -280 }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="sidebar"
          >
            <div className="sidebar-header">
              <div className="logo">Portal</div>
              <motion.button
                onClick={() => setSidebarOpen(false)}
                className="sidebar-toggle"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                ◀
              </motion.button>
            </div>

            <nav className="sidebar-nav">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="nav-item"
                >
                  <span className="nav-icon">{item.icon}</span>
                  <span className="nav-label">{item.label}</span>
                </Link>
              ))}
            </nav>

            <div className="sidebar-footer">
              <div className="user-info">
                <div className="user-avatar">
                  {profile?.name.charAt(0).toUpperCase()}
                </div>
                <div className="user-details">
                  <div className="user-name">{profile?.name}</div>
                  <div className="user-role">{profile?.role}</div>
                </div>
              </div>
              <motion.button
                onClick={handleSignOut}
                className="btn-signout"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Sign Out
              </motion.button>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      <div className={`main-content ${sidebarOpen ? 'sidebar-open' : ''}`}>
        {!sidebarOpen && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setSidebarOpen(true)}
            className="sidebar-toggle floating"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            ▶
          </motion.button>
        )}
        {children}
      </div>
    </div>
  );
}
