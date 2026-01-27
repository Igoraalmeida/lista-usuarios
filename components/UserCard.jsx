import { FaUserCircle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";

function UserCard({ user }) {
  return (
    <div className="user-card">
      <div className="user-line">
        <FaUserCircle className="user-icon" />
        <p className="text-name"><strong>Name:</strong> {user.name}</p>
      </div>

      <div className="user-line">
        <MdEmail className="email-icon" />
        <p className="text-email"><strong>Email:</strong> {user.email}</p>
      </div>

      <div className="user-line">
        <FaMapMarkerAlt className="address-icon" />
        <p className="text-address"><strong>City:</strong> {user.address.city}</p>
      </div>
    </div>
  );
}

export default UserCard;