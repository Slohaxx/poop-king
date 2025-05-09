import React from 'react';

const Profile: React.FC = () => {
    // Sample user data (this would typically come from a state management solution or API)
    const user = {
        username: 'PoopMaster123',
        checkInHistory: [
            { location: 'Park', date: '2023-10-01', emoji: '💩' },
            { location: 'Home', date: '2023-10-02', emoji: '💩' },
        ],
        reputation: 150,
        friends: ['Friend1', 'Friend2', 'Friend3'],
    };

    return (
        <div className="profile-container">
            <h1>{user.username}'s Profile</h1>
            <h2>Reputation: {user.reputation}</h2>
            <h3>Check-In History</h3>
            <ul>
                {user.checkInHistory.map((checkIn, index) => (
                    <li key={index}>
                        {checkIn.emoji} at {checkIn.location} on {checkIn.date}
                    </li>
                ))}
            </ul>
            <h3>Friends</h3>
            <ul>
                {user.friends.map((friend, index) => (
                    <li key={index}>{friend}</li>
                ))}
            </ul>
            <button>Edit Profile</button>
            <button>Manage Privacy Settings</button>
        </div>
    );
};

export default Profile;