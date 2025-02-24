import { useState } from "react";
import useGetUser from "./useGetUser";
import "./UserDetails.css";

const UserListing = () => {
    const userDetails = useGetUser(1, 10);
    const { headers = [], users = [] } = userDetails;

    return (
        <div className="container">
            {users.length > 0 ? (
                <div className="table-container">
                    <table className="user-listing">
                        <thead>
                            <tr>
                                {headers.map((title) => (
                                    <th key={title}>{title.toUpperCase()}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <tr key={user.id}>
                                    {headers.map((title) => (
                                        <td key={`${user.id}-${title}`}>
                                            { user[title] ? user[title] : "N/A"}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <p style={{ textAlign: "center", fontSize: "1.2rem" }}>Loading users...</p>
            )}
        </div>
    );
};

export default UserListing;
