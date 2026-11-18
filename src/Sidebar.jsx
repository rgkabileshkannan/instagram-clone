import React from "react";

function Sidebar() {
  return (
    <div className="m-3">
      <div className="d-flex flex-column gap-3">
        <img className="logotext" src="src\assets\Instatextlogo.webp" alt="" />
        <div>
          <i class="bi bi-house"></i>Home
        </div>
        <div>
          <i class="bi bi-search"></i>Search
        </div>
        <div>
          <i class="bi bi-compass"></i>Explore
        </div>
        <div>
          <i class="bi bi-play-circle"></i>Reels
        </div>
        <div>
          <i class="bi bi-chat-dots"></i>Message
        </div>
        <div>
          <i class="bi bi-heart"></i>Notification
        </div>
        <div>
          <i class="bi bi-file-plus"></i>Create
        </div>
        <div>
          <i class="bi bi-person"></i>Profile
        </div>
      </div>

      <div className="position-fixed bottom-0 d-flex flex-column gap-3 mb-3">
        <div>
          <i class="bi bi-threads"></i>Thread
        </div>
        <div>
          <i class="bi bi-list"></i>More
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
