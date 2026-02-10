import { useState } from "react";
import {
  User,
  Mail,
  Phone,
  Calendar,
  Settings,
  Heart,
  LogOut,
  Edit2,
  Save,
  X,
  Shield,
  Bell,
  Lock,
} from "lucide-react";

interface UserProfile {
  name: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  emergencyContact: string;
  emergencyPhone: string;
}

interface Preferences {
  emailNotifications: boolean;
  smsNotifications: boolean;
  appointmentReminders: boolean;
  communityUpdates: boolean;
  weeklyTips: boolean;
}

interface ProfileSectionProps {
  profileData: UserProfile;
  setProfileData: (data: UserProfile) => void;
  isEditing: boolean;
  setIsEditing: (editing: boolean) => void;
  handleCancelEdit: () => void;
  handleSaveProfile: () => void;
}

interface PreferencesSectionProps {
  preferences: Preferences;
  setPreferences: (prefs: Preferences) => void;
}

interface AccountPageProps {
  user: UserProfile;
  onLogout: () => void;
  onUpdateProfile: (data: Partial<UserProfile>) => void;
}

const ProfileSection = ({
  profileData,
  setProfileData,
  isEditing,
  setIsEditing,
  handleCancelEdit,
  handleSaveProfile,
}: ProfileSectionProps) => (
  <div className="bg-white rounded-xl shadow-md p-8 animate-fadeIn">
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-2xl font-bold text-gray-800">Profile Information</h2>
      {!isEditing ? (
        <button
          onClick={() => setIsEditing(true)}
          className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 hover:shadow-lg"
        >
          <Edit2 className="w-4 h-4" />
          <span>Edit Profile</span>
        </button>
      ) : (
        <div className="flex space-x-2">
          <button
            onClick={handleSaveProfile}
            className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-all duration-300 hover:shadow-lg"
          >
            <Save className="w-4 h-4" />
            <span>Save</span>
          </button>
          <button
            onClick={handleCancelEdit}
            className="flex items-center space-x-2 bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500 transition-all duration-300"
          >
            <X className="w-4 h-4" />
            <span>Cancel</span>
          </button>
        </div>
      )}
    </div>

    <div className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Full Name
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              value={profileData.name}
              onChange={(e) =>
                setProfileData({ ...profileData, name: e.target.value })
              }
              disabled={!isEditing}
              className={`w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg ${
                isEditing
                  ? "focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  : "bg-gray-50"
              } transition`}
            />
          </div>
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Email Address
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="email"
              value={profileData.email}
              onChange={(e) =>
                setProfileData({ ...profileData, email: e.target.value })
              }
              disabled={!isEditing}
              className={`w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg ${
                isEditing
                  ? "focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  : "bg-gray-50"
              } transition`}
            />
          </div>
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Phone Number
          </label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="tel"
              value={profileData.phone}
              onChange={(e) =>
                setProfileData({ ...profileData, phone: e.target.value })
              }
              disabled={!isEditing}
              placeholder="(555) 123-4567"
              className={`w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg ${
                isEditing
                  ? "focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  : "bg-gray-50"
              } transition`}
            />
          </div>
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Date of Birth
          </label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="date"
              value={profileData.dateOfBirth}
              onChange={(e) =>
                setProfileData({
                  ...profileData,
                  dateOfBirth: e.target.value,
                })
              }
              disabled={!isEditing}
              className={`w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg ${
                isEditing
                  ? "focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  : "bg-gray-50"
              } transition`}
            />
          </div>
        </div>
      </div>

      <div className="pt-4 border-t">
        <h3 className="text-lg font-bold text-gray-800 mb-4">
          Emergency Contact
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Contact Name
            </label>
            <input
              type="text"
              value={profileData.emergencyContact}
              onChange={(e) =>
                setProfileData({
                  ...profileData,
                  emergencyContact: e.target.value,
                })
              }
              disabled={!isEditing}
              placeholder="Emergency contact name"
              className={`w-full px-4 py-3 border border-gray-300 rounded-lg ${
                isEditing
                  ? "focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  : "bg-gray-50"
              } transition`}
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Contact Phone
            </label>
            <input
              type="tel"
              value={profileData.emergencyPhone}
              onChange={(e) =>
                setProfileData({
                  ...profileData,
                  emergencyPhone: e.target.value,
                })
              }
              disabled={!isEditing}
              placeholder="Emergency contact phone"
              className={`w-full px-4 py-3 border border-gray-300 rounded-lg ${
                isEditing
                  ? "focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  : "bg-gray-50"
              } transition`}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

const PreferencesSection = ({
  preferences,
  setPreferences,
}: PreferencesSectionProps) => (
  <div className="bg-white rounded-xl shadow-md p-8 animate-fadeIn">
    <h2 className="text-2xl font-bold text-gray-800 mb-6">
      Notification Preferences
    </h2>

    <div className="space-y-4">
      {[
        {
          key: "emailNotifications" as keyof Preferences,
          label: "Email Notifications",
          description: "Receive updates and alerts via email",
        },
        {
          key: "smsNotifications" as keyof Preferences,
          label: "SMS Notifications",
          description: "Receive text message alerts",
        },
        {
          key: "appointmentReminders" as keyof Preferences,
          label: "Appointment Reminders",
          description: "Get reminders 24 hours before appointments",
        },
        {
          key: "communityUpdates" as keyof Preferences,
          label: "Community Updates",
          description: "Stay updated on forum discussions",
        },
        {
          key: "weeklyTips" as keyof Preferences,
          label: "Weekly Mental Health Tips",
          description: "Receive helpful tips every week",
        },
      ].map((pref) => (
        <div
          key={pref.key}
          className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
        >
          <div className="flex-1">
            <h4 className="font-semibold text-gray-800">{pref.label}</h4>
            <p className="text-sm text-gray-600">{pref.description}</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={preferences[pref.key]}
              onChange={(e) =>
                setPreferences({
                  ...preferences,
                  [pref.key]: e.target.checked,
                })
              }
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </div>
      ))}
    </div>

    <div className="mt-6 bg-blue-50 rounded-lg p-4">
      <p className="text-sm text-gray-700">
        You can change these preferences at any time. For urgent matters, we
        recommend keeping appointment reminders enabled.
      </p>
    </div>
  </div>
);

const SecuritySection = () => (
  <div className="bg-white rounded-xl shadow-md p-8 animate-fadeIn">
    <h2 className="text-2xl font-bold text-gray-800 mb-6">Security Settings</h2>

    <div className="space-y-6">
      <div className="p-4 bg-gray-50 rounded-lg">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-3">
            <Lock className="w-6 h-6 text-gray-600" />
            <div>
              <h4 className="font-semibold text-gray-800">Password</h4>
              <p className="text-sm text-gray-600">Last changed 30 days ago</p>
            </div>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300">
            Change Password
          </button>
        </div>
      </div>

      <div className="p-4 bg-gray-50 rounded-lg">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-3">
            <Shield className="w-6 h-6 text-gray-600" />
            <div>
              <h4 className="font-semibold text-gray-800">
                Two-Factor Authentication
              </h4>
              <p className="text-sm text-gray-600">
                Add an extra layer of security
              </p>
            </div>
          </div>
          <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition-all duration-300">
            Enable
          </button>
        </div>
      </div>

      <div className="p-4 bg-red-50 rounded-lg border border-red-200">
        <h4 className="font-semibold text-red-800 mb-2">Danger Zone</h4>
        <p className="text-sm text-red-700 mb-3">
          Delete your account and all associated data. This action cannot be
          undone.
        </p>
        <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-all duration-300">
          Delete Account
        </button>
      </div>
    </div>
  </div>
);

export default function AccountPage({
  user,
  onLogout,
  onUpdateProfile,
}: AccountPageProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [activeSection, setActiveSection] = useState("profile");
  const [profileData, setProfileData] = useState<UserProfile>({
    name: user.name || "User",
    email: user.email || "user@example.com",
    phone: user.phone || "",
    dateOfBirth: user.dateOfBirth || "",
    emergencyContact: user.emergencyContact || "",
    emergencyPhone: user.emergencyPhone || "",
  });

  const [preferences, setPreferences] = useState<Preferences>({
    emailNotifications: true,
    smsNotifications: false,
    appointmentReminders: true,
    communityUpdates: true,
    weeklyTips: true,
  });

  const handleSaveProfile = () => {
    onUpdateProfile(profileData);
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setProfileData({
      name: user.name || "User",
      email: user.email || "user@example.com",
      phone: user.phone || "",
      dateOfBirth: user.dateOfBirth || "",
      emergencyContact: user.emergencyContact || "",
      emergencyPhone: user.emergencyPhone || "",
    });
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-8 mb-8 shadow-lg">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <div className="bg-white/20 p-4 rounded-full">
                <User className="w-12 h-12" />
              </div>
              <div>
                <h1 className="text-3xl font-bold">{profileData.name}</h1>
                <p className="text-blue-100">{profileData.email}</p>
              </div>
            </div>
            <button
              onClick={onLogout}
              className="flex items-center space-x-2 bg-white/20 hover:bg-white/30 px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-lg"
            >
              <LogOut className="w-5 h-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-2 mb-8 bg-white rounded-lg p-2 shadow-md overflow-x-auto">
          {[
            { key: "profile", label: "Profile", icon: User },
            { key: "preferences", label: "Preferences", icon: Bell },
            { key: "security", label: "Security", icon: Shield },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveSection(tab.key)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 whitespace-nowrap ${
                activeSection === tab.key
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <tab.icon className="w-5 h-5" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {activeSection === "profile" && (
          <ProfileSection
            profileData={profileData}
            setProfileData={setProfileData}
            isEditing={isEditing}
            setIsEditing={setIsEditing}
            handleCancelEdit={handleCancelEdit}
            handleSaveProfile={handleSaveProfile}
          />
        )}

        {activeSection === "preferences" && (
          <PreferencesSection
            preferences={preferences}
            setPreferences={setPreferences}
          />
        )}

        {activeSection === "security" && <SecuritySection />}

        {/* Account Stats */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <Calendar className="w-12 h-12 text-blue-600 mx-auto mb-3" />
            <div className="text-3xl font-bold text-gray-800 mb-1">3</div>
            <div className="text-gray-600">Upcoming Appointments</div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <Heart className="w-12 h-12 text-purple-600 mx-auto mb-3" />
            <div className="text-3xl font-bold text-gray-800 mb-1">12</div>
            <div className="text-gray-600">Community Posts</div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <Settings className="w-12 h-12 text-pink-600 mx-auto mb-3" />
            <div className="text-3xl font-bold text-gray-800 mb-1">45</div>
            <div className="text-gray-600">Days Active</div>
          </div>
        </div>
      </div>
    </div>
  );
}
