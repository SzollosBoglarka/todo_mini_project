// SORT

function detectSortOrder(table, columnIndex) {
    const rows = Array.from(table.tBodies[0].querySelectorAll("tr"));
    const values = rows.map(row => row.querySelectorAll("td")[columnIndex].textContent.trim().toLowerCase());

    const parsed = values.map(v => columnIndex === 4 ? new Date(v) : isNaN(v) ? v : Number(v));

    let asc = true;
    let desc = true;

    for (let i = 1; i < parsed.length; i++) {
        if (parsed[i - 1] > parsed[i]) asc = false;
        if (parsed[i - 1] < parsed[i]) desc = false;
    }

    if (asc) return "asc";
    if (desc) return "desc";
    return "none";
}

function sortTableByColumn(table, columnIndex, asc = true) {
    const dirModifier = asc ? 1 : -1;
    const tBody = table.tBodies[0];
    const rows = Array.from(tBody.querySelectorAll("tr"));

    const sortedRows = rows.sort((a, b) => {
        const aColText = a.querySelectorAll("td")[columnIndex].textContent.trim().toLowerCase();
        const bColText = b.querySelectorAll("td")[columnIndex].textContent.trim().toLowerCase();

        const aVal = columnIndex === 4 ? new Date(aColText) : isNaN(aColText) ? aColText : Number(aColText);
        const bVal = columnIndex === 4 ? new Date(bColText) : isNaN(bColText) ? bColText : Number(bColText);

        if (aVal > bVal) return 1 * dirModifier;
        if (aVal < bVal) return -1 * dirModifier;
        return 0;
    });

    tBody.innerHTML = "";
    sortedRows.forEach(row => tBody.appendChild(row));
}

document.querySelectorAll("#taskManagerTable th").forEach((headerCell, index) => {
    if (index === 0 || index === 1 || index === 4) {
        headerCell.style.cursor = "pointer";
        headerCell.addEventListener("click", () => {
            const tableElement = headerCell.closest("table");

            const currentOrder = detectSortOrder(tableElement, index);

            let asc = true;
            if (currentOrder === "asc") asc = false;
            else asc = true;

            sortTableByColumn(tableElement, index, asc);
        });
    }
});

// FILTERING

let activeFilters = {
    search: "",
    category: "kategória",
    priority: "prioritás",
    status: "státusz"
};

function applyFilters() {
    const rows = document.querySelectorAll("#taskManagerTable tbody tr");

    rows.forEach(row => {
        const id = row.querySelector(".task_id").textContent.toLowerCase();
        const title = row.querySelector(".task_title").textContent.toLowerCase();
        const description = row.querySelector(".task_description").textContent.toLowerCase();
        const category = row.querySelector(".task_category").textContent.toLowerCase();
        const deadline = row.querySelector(".task_deadline").textContent.toLowerCase();
        const priority = row.querySelector(".task_priority").textContent.toLowerCase();
        const status = row.querySelector(".task_status").textContent.toLowerCase();

        let matchesSearch =
            id.includes(activeFilters.search) ||
            title.includes(activeFilters.search) ||
            description.includes(activeFilters.search) ||
            category.includes(activeFilters.search) ||
            deadline.includes(activeFilters.search) ||
            priority.includes(activeFilters.search) ||
            status.includes(activeFilters.search);

        let matchesCategory =
            activeFilters.category === "kategória" || category === activeFilters.category;

        let matchesPriority =
            activeFilters.priority === "prioritás" || priority === activeFilters.priority;

        let matchesStatus =
            activeFilters.status === "státusz" || status === activeFilters.status;

        if (matchesSearch && matchesCategory && matchesPriority && matchesStatus) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    });
}

// SEARCH

searchInput.addEventListener("input", () => {
    activeFilters.search = searchInput.value.toLowerCase();
    applyFilters();
});

// CATEGORY FILTER

document.querySelectorAll(".category-filter").forEach(item => {
    item.addEventListener("click", (e) => {
        e.preventDefault();
        const selectedText = e.target.textContent;
        const selectedCategory = e.target.dataset.category.toLowerCase();

        document.getElementById("categoryDropdown").textContent = selectedText;
        activeFilters.category = selectedCategory;
        applyFilters();
    });
});

// PRIORITY FILTER

document.querySelectorAll(".priority-filter").forEach(item => {
    item.addEventListener("click", (e) => {
        e.preventDefault();
        const selectedText = e.target.textContent;
        const selectedPriority = e.target.dataset.priority.toLowerCase();

        document.getElementById("priorityDropdown").textContent = selectedText;
        activeFilters.priority = selectedPriority;
        applyFilters();
    });
});

// STATUS FILTER

document.querySelectorAll(".status-filter").forEach(item => {
    item.addEventListener("click", (e) => {
        e.preventDefault();
        const selectedText = e.target.textContent;
        const selectedStatus = e.target.dataset.status.toLowerCase();

        document.getElementById("statusDropdown").textContent = selectedText;

        document.getElementById("statusDropdown").textContent = selectedText;
        activeFilters.status = selectedStatus;
        applyFilters();
    });
});

// DELETE FILTERS

filterDelete.addEventListener("click", (e) => {
    window.location.reload();
    searchInput.value = "";
});