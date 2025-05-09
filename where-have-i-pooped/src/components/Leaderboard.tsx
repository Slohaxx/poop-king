import React from 'react';

const Leaderboard: React.FC = () => {
    const [leaderboardData, setLeaderboardData] = React.useState([]);

    React.useEffect(() => {
        // Fetch leaderboard data from an API or service
        const fetchLeaderboardData = async () => {
            // Placeholder for API call
            const response = await fetch('/api/leaderboard');
            const data = await response.json();
            setLeaderboardData(data);
        };

        fetchLeaderboardData();
    }, []);

    return (
        <div className="leaderboard">
            <h2>Leaderboard</h2>
            <ul>
                {leaderboardData.map((user, index) => (
                    <li key={user.id}>
                        <span>{index + 1}. {user.username}</span>
                        <span> - {user.checkInCount} Check-ins</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Leaderboard;