import gsap from "gsap"

// Select the "Repeat" button
const repeat = document.querySelector(".repeat");

// Sample data for each day of the week
const data = [
  { label: "Mon", value: 80 },
  { label: "Tue", value: 60 },
  { label: "Wed", value: 100 },
  { label: "Thu", value: 70 },
  { label: "Fri", value: 90 },
  { label: "Sat", value: 50 },
  { label: "Sun", value: 65 },
];

// Get reference to the chart container
const chart = document.getElementById("chart");

// Calculate layout constants
const chartHeight = chart.clientHeight;
const barWidth = 50;
const spacing = 25;
const maxValue = Math.max(...data.map((d) => d.value));

// Render the bar chart
function renderChart() {
  data.forEach((item, i) => {
    // Create a wrapper for bar + label
    const wrapper = document.createElement("div");
    wrapper.className = "bar-wrapper";
    wrapper.style.left = `${i * (barWidth + spacing) + 50}px`;
    wrapper.style.width = `${barWidth}px`;

    // Create the bar itself
    const bar = document.createElement("div");
    bar.className = "bar";
    const barHeight = (item.value / maxValue) * (chartHeight - 60);
    bar.style.height = `${barHeight}px`;

    // Create the label under the bar
    const label = document.createElement("div");
    label.className = "label";
    label.textContent = item.label;

    // Assemble the components
    wrapper.appendChild(bar);
    wrapper.appendChild(label);
    chart.appendChild(wrapper);

   gsap.to(bar,{
    scaleY:1,
    duration:2,
    ease:"elastic.out(1,1.25)",
    delay: i * 0.5,

   })
  });
}

// Clear chart and re-render on "Repeat" click
repeat.addEventListener("click", () => {
  chart.innerHTML = "";
  renderChart();
});

// Initial render
renderChart();
