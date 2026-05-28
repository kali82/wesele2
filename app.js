const guests = [
  { id: "g01", row: 2, name: "Ewa Kołodziej" },
  { id: "g02", row: 3, name: "Maciej Kaliszewski" },
  { id: "g03", row: 4, name: "Anna Kołodziej" },
  { id: "g04", row: 5, name: "Zygmunt Kołodziej" },
  { id: "g05", row: 6, name: "Mirosława Kaliszewska" },
  { id: "g06", row: 7, name: "Sławomir Kaliszewski" },
  { id: "g07", row: 8, name: "Justyna Kołodziej" },
  { id: "g08", row: 9, name: "Jakub Janik" },
  { id: "g09", row: 10, name: "Michał Kaliszewski" },
  { id: "g10", row: 11, name: "Klaudia Jarosz" },
  { id: "g11", row: 12, name: "Agnieszka Keller" },
  { id: "g12", row: 13, name: "Krystian Keller" },
  { id: "g13", row: 14, name: "Paulina Głowacka" },
  { id: "g14", row: 15, name: "Robert Głowacki" },
  { id: "g15", row: 16, name: "Krystian Bedynek" },
  { id: "g16", row: 17, name: "Kamila Holak" },
  { id: "g17", row: 18, name: "Maria Majewska" },
  { id: "g18", row: 19, name: "Dariusz Majewski" },
  { id: "g19", row: 20, name: "Ania Markowska" },
  { id: "g20", row: 21, name: "Łukasz Markowski" },
  { id: "g21", row: 22, name: "Weronika Jakubowska" },
  { id: "g22", row: 23, name: "Szymon Jakubowski" },
  { id: "g23", row: 24, name: "Kamil Cendalski" },
  { id: "g24", row: 25, name: "Julia Maciejewska" },
  { id: "g25", row: 26, name: "Agnieszka Stochniał" },
  { id: "g26", row: 27, name: "Maciek Kaczanowski" },
  { id: "g27", row: 28, name: "Aleksandra Zając" },
  { id: "g28", row: 29, name: "Kamil Zając" },
  { id: "g29", row: 30, name: "Michalina Karecińska" },
  { id: "g30", row: 31, name: "Mateusz Kareciński" },
  { id: "g31", row: 32, name: "Anna Kłos" },
  { id: "g32", row: 33, name: "Adam Kłos" },
  { id: "g33", row: 34, name: "Jagoda Bedynek" },
  { id: "g34", row: 35, name: "Robert Bedynek" },
  { id: "g35", row: 36, name: "Adrian Parafińśki" },
  { id: "g36", row: 37, name: "Anna Kusz / Parafińska" },
  { id: "g37", row: 38, name: "Bożena Dembek" },
  { id: "g38", row: 39, name: "Janusz Dembek" },
  { id: "g39", row: 40, name: "Tomek Dembek" },
  { id: "g40", row: 41, name: "Olga Dembek" },
  { id: "g41", row: 42, name: "Maja Dembek" },
  { id: "g42", row: 43, name: "Os Tow /" },
  { id: "g43", row: 44, name: "Joanna Dembek-Feiz" },
  { id: "g44", row: 45, name: "Dariusz Feiz" },
  { id: "g45", row: 46, name: "Lidia Gałek" },
  { id: "g46", row: 47, name: "Roman" },
  { id: "g47", row: 48, name: "Aleksandra Dudziak" },
  { id: "g48", row: 49, name: "Paweł Dudziak" },
  { id: "g49", row: 50, name: "Katarzyna Gałek" },
  { id: "g50", row: 51, name: "Paweł Kopyść" },
  { id: "g51", row: 52, name: "Basia Cisło" },
  { id: "g52", row: 53, name: "Józef Bejczak" },
  { id: "g53", row: 54, name: "Małgorzata Bejczak" },
  { id: "g54", row: 55, name: "Barbara Łoza" },
  { id: "g55", row: 56, name: "Marta Łoza" },
  { id: "g56", row: 59, name: "Rafał Stachura" },
  { id: "g57", row: 60, name: "Marzena Motykiewicz" },
  { id: "g58", row: 61, name: "Marcin Stachura" },
  { id: "g59", row: 62, name: "Paulina Stachura" },
  { id: "g60", row: 63, name: "Józef Stachura" },
  { id: "g61", row: 64, name: "Zofia Stachura" },
  { id: "g62", row: 67, name: "Sławomir Długosz" },
  { id: "g63", row: 68, name: "Anna Długosz" },
  { id: "g64", row: 70, name: "Michał Kaliszewski" },
  { id: "g65", row: 71, name: "Agnieszka Kaliszewska" },
  { id: "g66", row: 78, name: "Tomasz Rogula" },
  { id: "g67", row: 79, name: "Anna Rogula" },
  { id: "g68", row: 89, name: "Stanisław Kowalski" },
  { id: "g69", row: 90, name: "Iwona Kowalska" },
  { id: "g70", row: 91, name: "Paulina Kowalska" },
  { id: "g71", row: 92, name: "Szymon Stefańczyk" },
  { id: "g72", row: 97, name: "Grzegorz Poddębniak" },
  { id: "g73", row: 98, name: "Bogumiła Poddębniak" },
  { id: "g74", row: 100, name: "Łukasz Łazarski" },
  { id: "g75", row: 101, name: "Katarzyna Łazarska" },
  { id: "g76", row: 108, name: "Karolina Poddębniak-Strama" },
  { id: "g77", row: 109, name: "Kamil Poddębniak-Strama" },
  { id: "g78", row: 110, name: "Kamil Malinowski" },
  { id: "g79", row: 114, name: "Katarzyna Kaliszewska" },
  { id: "g80", row: 115, name: "Piotr Kaliszewski" },
];

const tables = [
  { id: "rectangular", name: "Stół prostokątny", capacity: 6, shape: "rectangle", locked: true },
  ...Array.from({ length: 8 }, (_, index) => ({
    id: `round-${index + 1}`,
    name: `Stół okrągły ${index + 1}`,
    capacity: 10,
    shape: "round",
    locked: false,
  })),
];

const initialRectangularGuests = ["g02", "g01", "g13", "g14", "g15", "g16"];
const lockedGuestIds = new Set(initialRectangularGuests);
const storageKey = "wesele-table-plan-v1";
const guestById = new Map(guests.map((guest) => [guest.id, guest]));
const nameCounts = guests.reduce((counts, guest) => {
  counts.set(guest.name, (counts.get(guest.name) || 0) + 1);
  return counts;
}, new Map());

let state = loadState();
let selectedGuestId = null;
let toastTimer = null;

const statsElement = document.querySelector("#stats");
const unassignedList = document.querySelector("#unassignedList");
const unassignedCount = document.querySelector("#unassignedCount");
const tablesGrid = document.querySelector("#tablesGrid");
const planNotice = document.querySelector("#planNotice");
const searchInput = document.querySelector("#guestSearch");
const toast = document.querySelector("#toast");

document.querySelector("#exportCsv").addEventListener("click", exportCsv);
document.querySelector("#clearRoundTables").addEventListener("click", clearRoundTables);
document.querySelector("#resetPlan").addEventListener("click", resetPlan);
searchInput.addEventListener("input", renderUnassigned);
unassignedList.addEventListener("dragover", handleDragOver);
unassignedList.addEventListener("dragleave", handleDragLeave);
unassignedList.addEventListener("drop", (event) => {
  event.preventDefault();
  unassignedList.classList.remove("drag-over");
  const guestId = getDraggedGuestId(event);
  if (guestId && !lockedGuestIds.has(guestId)) {
    unassignGuest(guestId);
    selectedGuestId = null;
    persistAndRender();
  }
});
unassignedList.addEventListener("click", () => {
  if (selectedGuestId && !lockedGuestIds.has(selectedGuestId)) {
    unassignGuest(selectedGuestId);
    selectedGuestId = null;
    persistAndRender();
  }
});

render();

function createDefaultState() {
  const assignments = Object.fromEntries(
    tables.map((table) => [table.id, Array(table.capacity).fill(null)]),
  );

  initialRectangularGuests.forEach((guestId, index) => {
    assignments.rectangular[index] = guestId;
  });

  return { assignments };
}

function loadState() {
  const fallback = createDefaultState();
  const stored = localStorage.getItem(storageKey);

  if (!stored) {
    return fallback;
  }

  try {
    const parsed = JSON.parse(stored);
    return validateState(parsed) ? parsed : fallback;
  } catch {
    return fallback;
  }
}

function validateState(candidate) {
  if (!candidate?.assignments) {
    return false;
  }

  const seen = new Set();
  for (const table of tables) {
    const seats = candidate.assignments[table.id];
    if (!Array.isArray(seats) || seats.length !== table.capacity) {
      return false;
    }

    for (const guestId of seats) {
      if (guestId === null) {
        continue;
      }
      if (!guestById.has(guestId) || seen.has(guestId)) {
        return false;
      }
      seen.add(guestId);
    }
  }

  return initialRectangularGuests.every(
    (guestId, index) => candidate.assignments.rectangular[index] === guestId,
  );
}

function saveState() {
  localStorage.setItem(storageKey, JSON.stringify(state));
}

function render() {
  renderStats();
  renderUnassigned();
  renderTables();
}

function renderStats() {
  const assigned = getAssignedIds().size;
  const capacity = tables.reduce((sum, table) => sum + table.capacity, 0);
  const roundAssigned = tables
    .filter((table) => table.shape === "round")
    .reduce((sum, table) => sum + state.assignments[table.id].filter(Boolean).length, 0);

  statsElement.innerHTML = [
    statHtml(guests.length, "Potwierdzeni"),
    statHtml(assigned, "Przy stołach"),
    statHtml(guests.length - assigned, "Do rozsadzenia"),
    statHtml(capacity - assigned, "Wolne miejsca"),
  ].join("");

  const unassigned = guests.length - assigned;
  const remainingRoundSeats = 80 - roundAssigned;
  planNotice.textContent =
    unassigned === 0
      ? `Wszyscy przypisani. Wolne miejsca przy okrągłych stołach: ${remainingRoundSeats}.`
      : `Okrągłe stoły: ${roundAssigned}/80.`;
}

function statHtml(value, label) {
  return `<div class="stat"><strong>${value}</strong><span>${label}</span></div>`;
}

function renderUnassigned() {
  const query = normalizeText(searchInput.value);
  const unassigned = getUnassignedGuests().filter((guest) =>
    normalizeText(guest.name).includes(query),
  );

  unassignedCount.textContent = `${unassigned.length} osób`;
  unassignedList.innerHTML = "";

  if (unassigned.length === 0) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = query ? "Brak wyników" : "Lista jest pusta";
    unassignedList.append(empty);
    return;
  }

  unassigned.forEach((guest) => {
    unassignedList.append(createGuestChip(guest.id));
  });
}

function renderTables() {
  tablesGrid.innerHTML = "";

  tables.forEach((table) => {
    const seats = state.assignments[table.id];
    const taken = seats.filter(Boolean).length;
    const card = document.createElement("article");
    card.className = `table-card${table.locked ? " locked" : ""}`;
    card.dataset.shape = table.shape;

    card.innerHTML = `
      <div class="table-head">
        <div class="table-symbol" aria-hidden="true"></div>
        <div class="table-title">
          <strong>${table.name}</strong>
          <span class="capacity">${table.locked ? "stały skład" : `${table.capacity} miejsc`}</span>
        </div>
        <div class="status-pill">${taken}/${table.capacity}</div>
      </div>
    `;

    const seatList = document.createElement("div");
    seatList.className = "seat-list";

    seats.forEach((guestId, index) => {
      seatList.append(createSeat(table, index, guestId));
    });

    card.append(seatList);
    if (!table.locked) {
      card.addEventListener("dragover", handleDragOver);
      card.addEventListener("dragleave", handleDragLeave);
      card.addEventListener("drop", (event) => {
        event.preventDefault();
        card.classList.remove("drag-over");
        const guestId = getDraggedGuestId(event);
        moveGuestToTable(guestId, table.id);
      });
    }
    tablesGrid.append(card);
  });
}

function createSeat(table, index, guestId) {
  const seat = document.createElement("div");
  seat.className = `seat ${guestId ? "occupied" : "empty"}`;
  seat.dataset.tableId = table.id;
  seat.dataset.index = String(index);

  if (!table.locked) {
    seat.addEventListener("dragover", handleDragOver);
    seat.addEventListener("dragleave", handleDragLeave);
    seat.addEventListener("drop", (event) => {
      event.preventDefault();
      event.stopPropagation();
      seat.classList.remove("drag-over");
      const draggedGuestId = getDraggedGuestId(event);
      moveGuestToSlot(draggedGuestId, table.id, index);
    });
    seat.addEventListener("click", () => {
      if (selectedGuestId) {
        moveGuestToSlot(selectedGuestId, table.id, index);
      }
    });
  }

  if (guestId) {
    seat.append(createGuestChip(guestId, table.locked));
  } else {
    seat.textContent = `Miejsce ${index + 1}`;
  }

  return seat;
}

function createGuestChip(guestId, locked = false) {
  const guest = guestById.get(guestId);
  const chip = document.createElement("div");
  chip.className = `guest-chip${locked || lockedGuestIds.has(guestId) ? " locked" : ""}`;
  chip.draggable = !(locked || lockedGuestIds.has(guestId));
  chip.dataset.guestId = guestId;
  chip.tabIndex = 0;
  chip.title = `${guest.name}, wiersz Excela ${guest.row}`;

  const duplicateLabel = nameCounts.get(guest.name) > 1 ? `wiersz ${guest.row}` : "";
  chip.innerHTML = `
    <span class="guest-main">
      <span class="guest-name">${guest.name}</span>
      ${duplicateLabel ? `<span class="guest-meta">${duplicateLabel}</span>` : ""}
    </span>
  `;

  if (!locked && !lockedGuestIds.has(guestId) && isAssigned(guestId)) {
    const remove = document.createElement("button");
    remove.className = "remove-guest";
    remove.type = "button";
    remove.setAttribute("aria-label", `Usuń ${guest.name} ze stołu`);
    remove.textContent = "×";
    remove.addEventListener("click", (event) => {
      event.stopPropagation();
      unassignGuest(guestId);
      selectedGuestId = null;
      persistAndRender();
    });
    chip.append(remove);
  }

  if (guestId === selectedGuestId) {
    chip.classList.add("selected");
  }

  chip.addEventListener("dragstart", (event) => {
    if (lockedGuestIds.has(guestId)) {
      event.preventDefault();
      return;
    }
    event.dataTransfer.setData("text/plain", guestId);
    event.dataTransfer.effectAllowed = "move";
  });

  chip.addEventListener("click", (event) => {
    event.stopPropagation();
    if (lockedGuestIds.has(guestId)) {
      return;
    }
    selectedGuestId = selectedGuestId === guestId ? null : guestId;
    render();
  });

  chip.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      chip.click();
    }
  });

  return chip;
}

function handleDragOver(event) {
  event.preventDefault();
  event.currentTarget.classList.add("drag-over");
}

function handleDragLeave(event) {
  event.currentTarget.classList.remove("drag-over");
}

function getDraggedGuestId(event) {
  return event.dataTransfer.getData("text/plain");
}

function moveGuestToTable(guestId, tableId) {
  if (!guestId || lockedGuestIds.has(guestId)) {
    return;
  }

  const seats = state.assignments[tableId];
  const emptyIndex = seats.findIndex((id) => id === null);
  if (emptyIndex === -1) {
    showToast("Ten stół jest pełny");
    return;
  }

  moveGuestToSlot(guestId, tableId, emptyIndex);
}

function moveGuestToSlot(guestId, tableId, targetIndex) {
  if (!guestId || lockedGuestIds.has(guestId)) {
    return;
  }

  const targetSeats = state.assignments[tableId];
  const currentLocation = findGuestLocation(guestId);
  const targetGuestId = targetSeats[targetIndex];

  if (currentLocation?.tableId === tableId && currentLocation.index === targetIndex) {
    selectedGuestId = null;
    render();
    return;
  }

  if (currentLocation) {
    state.assignments[currentLocation.tableId][currentLocation.index] = null;
  }

  if (targetGuestId && !lockedGuestIds.has(targetGuestId) && currentLocation) {
    state.assignments[currentLocation.tableId][currentLocation.index] = targetGuestId;
  }

  targetSeats[targetIndex] = guestId;
  selectedGuestId = null;
  persistAndRender();
}

function unassignGuest(guestId) {
  const location = findGuestLocation(guestId);
  if (!location || lockedGuestIds.has(guestId)) {
    return;
  }
  state.assignments[location.tableId][location.index] = null;
}

function clearRoundTables() {
  tables
    .filter((table) => table.shape === "round")
    .forEach((table) => {
      state.assignments[table.id] = Array(table.capacity).fill(null);
    });
  selectedGuestId = null;
  persistAndRender();
  showToast("Wyczyszczono stoły okrągłe");
}

function resetPlan() {
  state = createDefaultState();
  selectedGuestId = null;
  searchInput.value = "";
  persistAndRender();
  showToast("Przywrócono układ początkowy");
}

function persistAndRender() {
  saveState();
  render();
}

function getAssignedIds() {
  const ids = new Set();
  Object.values(state.assignments).forEach((seats) => {
    seats.forEach((guestId) => {
      if (guestId) {
        ids.add(guestId);
      }
    });
  });
  return ids;
}

function getUnassignedGuests() {
  const assigned = getAssignedIds();
  return guests.filter((guest) => !assigned.has(guest.id));
}

function isAssigned(guestId) {
  return Boolean(findGuestLocation(guestId));
}

function findGuestLocation(guestId) {
  for (const table of tables) {
    const index = state.assignments[table.id].indexOf(guestId);
    if (index !== -1) {
      return { tableId: table.id, index };
    }
  }
  return null;
}

function normalizeText(value) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function exportCsv() {
  const rows = [["Stół", "Miejsce", "Osoba", "Wiersz Excela"]];

  tables.forEach((table) => {
    state.assignments[table.id].forEach((guestId, index) => {
      const guest = guestId ? guestById.get(guestId) : null;
      rows.push([
        table.name,
        String(index + 1),
        guest ? guest.name : "",
        guest ? String(guest.row) : "",
      ]);
    });
  });

  getUnassignedGuests().forEach((guest) => {
    rows.push(["Nieprzydzieleni", "", guest.name, String(guest.row)]);
  });

  const csv = rows
    .map((row) => row.map((cell) => `"${String(cell).replaceAll('"', '""')}"`).join(";"))
    .join("\n");
  const blob = new Blob([`\uFEFF${csv}`], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "plan-stolow-wesele.csv";
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function showToast(message) {
  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("visible");
  toastTimer = setTimeout(() => {
    toast.classList.remove("visible");
  }, 2200);
}
