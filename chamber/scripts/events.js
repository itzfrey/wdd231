document.addEventListener("DOMContentLoaded", () => {
    const eventsContainer = document.getElementById("events-container");

    fetch("data/events.json")
        .then(response => response.json())
        .then(events => {
            events.forEach(event => {
                const eventDiv = document.createElement("div");
                eventDiv.classList.add("event");

                eventDiv.innerHTML = `
          <div class="event-date">
            <span class="month">${event.month}</span>
            <span class="day">${event.day}</span>
          </div>
          <div class="event-details">
            <p>${event.title}</p>
            <div class="event-location">${event.location}</div>
          </div>
        `;

                eventsContainer.appendChild(eventDiv);
            });
        })
        .catch(error => console.error("Error loading events:", error));
});
