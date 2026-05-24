export function ProductWindow() {
  return (
    <div className="product-section">
      <div className="product-window">
        <div className="window-bar">
          <div className="window-dot" style={{ background: "#E8857A" }} />
          <div className="window-dot" style={{ background: "#E8C97A" }} />
          <div className="window-dot" style={{ background: "#7AC27A" }} />
          <span className="window-title">
            persistence · tuesday 27 may · plan v3
          </span>
        </div>
        <div className="window-body">
          <div className="planner-sidebar">
            <div className="planner-header">
              <div className="planner-date">Tue 27 May</div>
              <div className="planner-title">Today&apos;s focus</div>
            </div>

            <div className="plan-category cat-school">
              <div className="category-label">School</div>

              <div className="plan-block done">
                <div className="block-status" />
                <div className="block-info">
                  <div className="block-name">BU121 readings</div>
                  <div className="block-meta">~90 min · done</div>
                </div>
              </div>

              <div className="plan-block active">
                <div className="block-status" />
                <div className="block-info">
                  <div className="block-name">MA123 deep work</div>
                  <div className="block-meta">~2 hr · in progress</div>
                  <div className="block-tag">shifted · running</div>
                </div>
              </div>

              <div className="plan-block">
                <div className="block-status" />
                <div className="block-info">
                  <div className="block-name">Vector RA annotations</div>
                  <div className="block-meta">~1.5 hr · locked</div>
                </div>
              </div>
            </div>

            <div className="plan-category cat-work">
              <div className="category-label">Work</div>

              <div className="plan-block">
                <div className="block-status" />
                <div className="block-info">
                  <div className="block-name">Zehrs income shift</div>
                  <div className="block-meta">4 hr · shifted +10m</div>
                  <div className="block-tag">adjusted</div>
                </div>
              </div>
            </div>

            <div className="plan-category cat-habit">
              <div className="category-label">Habit</div>

              <div className="plan-block">
                <div className="block-status" />
                <div className="block-info">
                  <div className="block-name">Figure skating reading</div>
                  <div className="block-meta">~40 min · evening</div>
                  <div className="block-tag">from memory</div>
                </div>
              </div>
            </div>

            <div className="active-indicator" style={{ padding: "0 18px" }}>
              <div className="active-bar" />
              <span>+22m over · re-blocked</span>
              <div className="active-bar" />
            </div>
          </div>

          <div className="chat-panel">
            <div className="chat-topbar">
              <div className="chat-status">
                <span className="status-pill">
                  <span className="status-dot" />
                  watching your day
                </span>
              </div>
              <span className="recomputed-badge">
                recomputed 1.8s ago · 3 shifts
              </span>
            </div>

            <div className="chat-messages">
              <div className="msg">
                <div className="msg-avatar ai">p</div>
                <div>
                  <div className="msg-bubble">
                    You ran 22 minutes over on the shower block. I&apos;ve
                    already shifted things around — nothing&apos;s lost, just
                    compressed slightly. Here&apos;s what moved.
                    <div className="changes-card">
                      <div className="changes-label">Adjustments</div>

                      <div className="change-row">
                        <span className="change-name">MA123</span>
                        <span className="change-from">10:30</span>
                        <span className="change-arrow">→</span>
                        <span className="change-to">10:50</span>
                        <span className="change-why">absorbed the delay</span>
                      </div>

                      <div className="change-row">
                        <span className="change-name">Lunch</span>
                        <span className="change-from">30 min</span>
                        <span className="change-arrow">→</span>
                        <span className="change-to">20 min</span>
                        <span className="change-why">tight but doable</span>
                      </div>

                      <div className="change-row">
                        <span className="change-name">Zehrs</span>
                        <span className="change-from">13:00</span>
                        <span className="change-arrow">→</span>
                        <span className="change-to">12:50</span>
                        <span className="change-why">still before Vector</span>
                      </div>

                      <div className="insert-row">
                        <span className="insert-icon">＋</span>
                        <span>
                          figure skating reading slotted from habit memory ·
                          evening gap
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="msg-time">10:26</div>
                </div>
              </div>

              <div className="msg user">
                <div className="msg-avatar">you</div>
                <div>
                  <div className="msg-bubble">
                    yeah fine. also my mom called — dinner pushed to 7:30
                  </div>
                  <div className="msg-time" style={{ textAlign: "right" }}>
                    10:28
                  </div>
                </div>
              </div>

              <div className="msg">
                <div className="msg-avatar ai">p</div>
                <div>
                  <div className="msg-bubble">
                    Logged. That opens a 90-minute gap before dinner. I&apos;m
                    putting 40 into the figure-skating reading and the other 50
                    toward the BU121 problem set you&apos;ve been parking for
                    two days. Plan updated.
                  </div>
                  <div className="msg-time">10:28</div>
                </div>
              </div>
            </div>

            <div className="chat-input-area">
              <div className="chat-input">
                Tell Persistence something new about today…
              </div>
              <button type="button" className="chat-send">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M2 7h10M8 3l4 4-4 4"
                    stroke="#F5F2ED"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
