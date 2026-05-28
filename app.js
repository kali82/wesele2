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
  { id: "g81", row: 13, name: "Miłosz Keller" },
  { id: "g82", row: 14, name: "Tobiasz Keller" },
  { id: "g12", row: 15, name: "Krystian Keller" },
  { id: "g13", row: 16, name: "Paulina Głowacka" },
  { id: "g14", row: 17, name: "Robert Głowacki" },
  { id: "g15", row: 18, name: "Krystian Bedynek" },
  { id: "g16", row: 19, name: "Kamila Holak" },
  { id: "g17", row: 20, name: "Maria Majewska" },
  { id: "g18", row: 21, name: "Dariusz Majewski" },
  { id: "g19", row: 22, name: "Ania Markowska" },
  { id: "g20", row: 23, name: "Łukasz Markowski" },
  { id: "g21", row: 24, name: "Weronika Jakubowska" },
  { id: "g22", row: 25, name: "Szymon Jakubowski" },
  { id: "g23", row: 26, name: "Kamil Cendalski" },
  { id: "g24", row: 27, name: "Julia Maciejewska" },
  { id: "g25", row: 28, name: "Agnieszka Stochniał" },
  { id: "g26", row: 29, name: "Maciek Kaczanowski" },
  { id: "g27", row: 30, name: "Aleksandra Zając" },
  { id: "g28", row: 31, name: "Kamil Zając" },
  { id: "g29", row: 32, name: "Michalina Karecińska" },
  { id: "g30", row: 33, name: "Mateusz Kareciński" },
  { id: "g31", row: 34, name: "Anna Kłos" },
  { id: "g32", row: 35, name: "Adam Kłos" },
  { id: "g33", row: 36, name: "Jagoda Bedynek" },
  { id: "g34", row: 37, name: "Robert Bedynek" },
  { id: "g35", row: 38, name: "Adrian Parafińśki" },
  { id: "g36", row: 39, name: "Anna Kusz / Parafińska" },
  { id: "g37", row: 40, name: "Bożena Dembek" },
  { id: "g38", row: 41, name: "Janusz Dembek" },
  { id: "g39", row: 42, name: "Tomek Dembek" },
  { id: "g40", row: 43, name: "Olga Dembek" },
  { id: "g41", row: 44, name: "Maja Dembek" },
  { id: "g42", row: 45, name: "Os Tow /" },
  { id: "g43", row: 46, name: "Joanna Dembek-Feiz" },
  { id: "g44", row: 47, name: "Dariusz Feiz" },
  { id: "g45", row: 48, name: "Lidia Gałek" },
  { id: "g46", row: 49, name: "Roman" },
  { id: "g47", row: 50, name: "Aleksandra Dudziak" },
  { id: "g48", row: 51, name: "Paweł Dudziak" },
  { id: "g49", row: 52, name: "Katarzyna Gałek" },
  { id: "g50", row: 53, name: "Paweł Kopyść" },
  { id: "g51", row: 54, name: "Basia Cisło" },
  { id: "g52", row: 55, name: "Józef Bejczak" },
  { id: "g53", row: 56, name: "Małgorzata Bejczak" },
  { id: "g54", row: 57, name: "Barbara Łoza" },
  { id: "g55", row: 58, name: "Marta Łoza" },
  { id: "g56", row: 61, name: "Rafał Stachura" },
  { id: "g83", row: 62, name: "Alicja Stachura" },
  { id: "g57", row: 63, name: "Marzena Motykiewicz" },
  { id: "g58", row: 64, name: "Marcin Stachura" },
  { id: "g59", row: 65, name: "Paulina Stachura" },
  { id: "g60", row: 66, name: "Józef Stachura" },
  { id: "g61", row: 67, name: "Zofia Stachura" },
  { id: "g62", row: 70, name: "Sławomir Długosz" },
  { id: "g63", row: 71, name: "Anna Długosz" },
  { id: "g64", row: 73, name: "Michał Kaliszewski" },
  { id: "g65", row: 74, name: "Agnieszka Kaliszewska" },
  { id: "g66", row: 81, name: "Tomasz Rogula" },
  { id: "g67", row: 82, name: "Anna Rogula" },
  { id: "g68", row: 92, name: "Stanisław Kowalski" },
  { id: "g69", row: 93, name: "Iwona Kowalska" },
  { id: "g70", row: 94, name: "Paulina Kowalska" },
  { id: "g71", row: 95, name: "Szymon Stefańczyk" },
  { id: "g72", row: 100, name: "Grzegorz Poddębniak" },
  { id: "g73", row: 101, name: "Bogumiła Poddębniak" },
  { id: "g74", row: 103, name: "Łukasz Łazarski" },
  { id: "g84", row: 104, name: "Iga Łazarska" },
  { id: "g75", row: 105, name: "Katarzyna Łazarska" },
  { id: "g76", row: 112, name: "Karolina Poddębniak-Strama" },
  { id: "g77", row: 113, name: "Kamil Poddębniak-Strama" },
  { id: "g78", row: 114, name: "Kamil Malinowski" },
  { id: "g79", row: 118, name: "Katarzyna Kaliszewska" },
  { id: "g80", row: 119, name: "Piotr Kaliszewski" },
  { id: "g85", row: 120, name: "Ola Ostromecka" },
  { id: "g86", row: 121, name: "Przemysław Barłodziej" },
];

const reserveGuests = [
  { id: "r75", row: 75, name: "Faustyna Kaliszewska" },
  { id: "r76", row: 76, name: "Os tow" },
  { id: "r91", row: 91, name: "Grzegorz Kaliszewski" },
  { id: "r102", row: 102, name: "Bernadeta Łazarska" },
  { id: "r115", row: 115, name: "Os tow" },
  { id: "r116", row: 116, name: "Olga Długosz-Ramalho" },
  { id: "r117", row: 117, name: "Tiago Ramalho" },
];

const defaultTables = [
  { id: "rectangular", name: "Stół prostokątny", capacity: 6, shape: "rectangle", locked: true },
  ...Array.from({ length: 8 }, (_, index) => ({
    id: `round-${index + 1}`,
    name: `Stół okrągły ${index + 1}`,
    capacity: 10,
    shape: "round",
    locked: false,
  })),
];

const minEditableTableCapacity = 10;
const maxEditableTableCapacity = 30;
const initialRectangularGuests = ["g02", "g01", "g13", "g14", "g15", "g16"];
const lockedGuestIds = new Set(initialRectangularGuests);
const storageKey = "wesele-table-plan-v1";
const staticGuestById = new Map([...guests, ...reserveGuests].map((guest) => [guest.id, guest]));

let state = loadState();
let selectedGuestId = null;
let toastTimer = null;

const statsElement = document.querySelector("#stats");
const unassignedList = document.querySelector("#unassignedList");
const unassignedCount = document.querySelector("#unassignedCount");
const reserveList = document.querySelector("#reserveList");
const reserveCount = document.querySelector("#reserveCount");
const addGuestForm = document.querySelector("#addGuestForm");
const newGuestNameInput = document.querySelector("#newGuestName");
const tablesGrid = document.querySelector("#tablesGrid");
const floorPlan = document.querySelector("#floorPlan");
const planNotice = document.querySelector("#planNotice");
const searchInput = document.querySelector("#guestSearch");
const toast = document.querySelector("#toast");
const planFileInput = document.querySelector("#planFileInput");

document.querySelector("#exportCsv").addEventListener("click", exportCsv);
document.querySelector("#savePlan").addEventListener("click", savePlanToFile);
document.querySelector("#loadPlan").addEventListener("click", () => planFileInput.click());
document.querySelector("#addTable").addEventListener("click", addTable);
document.querySelector("#clearRoundTables").addEventListener("click", clearRoundTables);
document.querySelector("#resetPlan").addEventListener("click", resetPlan);
planFileInput.addEventListener("change", importPlanFromFile);
addGuestForm.addEventListener("submit", addCustomGuest);
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
  const tables = cloneDefaultTables();
  const assignments = Object.fromEntries(
    tables.map((table) => [table.id, Array(table.capacity).fill(null)]),
  );

  initialRectangularGuests.forEach((guestId, index) => {
    assignments.rectangular[index] = guestId;
  });

  return { tables, assignments, customGuests: [] };
}

function loadState() {
  const fallback = createDefaultState();
  const stored = localStorage.getItem(storageKey);

  if (!stored) {
    return fallback;
  }

  try {
    const parsed = JSON.parse(stored);
    return normalizeState(parsed) || fallback;
  } catch {
    return fallback;
  }
}

function cloneDefaultTables() {
  return defaultTables.map((table) => ({ ...table }));
}

function normalizeState(candidate) {
  const source = candidate?.state || candidate;

  if (!source?.assignments) {
    return null;
  }

  const tables = normalizeTables(source.tables);
  const customGuests = normalizeCustomGuests(source.customGuests);
  const knownGuestIds = new Set([...staticGuestById.keys(), ...customGuests.map((guest) => guest.id)]);
  const assignments = Object.fromEntries(
    tables.map((table) => [table.id, Array(table.capacity).fill(null)]),
  );
  const seen = new Set();

  tables.forEach((table) => {
    if (table.locked) {
      return;
    }

    const seats = source.assignments[table.id];
    if (!Array.isArray(seats)) {
      return;
    }

    seats.slice(0, table.capacity).forEach((guestId, index) => {
      if (!guestId || lockedGuestIds.has(guestId) || !knownGuestIds.has(guestId) || seen.has(guestId)) {
        return;
      }

      assignments[table.id][index] = guestId;
      seen.add(guestId);
    });
  });

  initialRectangularGuests.forEach((guestId, index) => {
    assignments.rectangular[index] = guestId;
    seen.add(guestId);
  });

  return { tables, assignments, customGuests };
}

function normalizeTables(candidateTables) {
  const sourceTables = Array.isArray(candidateTables) ? candidateTables : defaultTables;
  const tables = [cloneDefaultTables()[0]];
  const seenIds = new Set(["rectangular"]);

  sourceTables.forEach((table) => {
    if (!table || table.id === "rectangular") {
      return;
    }

    const id = String(table.id || "").trim();
    if (!id || seenIds.has(id)) {
      return;
    }

    const capacity = Number.parseInt(table.capacity, 10);
    tables.push({
      id,
      name: String(table.name || "Stół").trim() || "Stół",
      capacity:
        Number.isInteger(capacity) && capacity >= minEditableTableCapacity
          ? Math.min(capacity, maxEditableTableCapacity)
          : minEditableTableCapacity,
      shape: table.shape === "rectangle" ? "rectangle" : "round",
      locked: false,
    });
    seenIds.add(id);
  });

  return Array.isArray(candidateTables) ? tables : cloneDefaultTables();
}

function normalizeCustomGuests(candidateGuests) {
  if (!Array.isArray(candidateGuests)) {
    return [];
  }

  const seenIds = new Set(staticGuestById.keys());
  return candidateGuests.reduce((result, guest) => {
    const id = String(guest?.id || "").trim();
    const name = String(guest?.name || "").trim();

    if (!id || !name || seenIds.has(id)) {
      return result;
    }

    result.push({ id, name, custom: true });
    seenIds.add(id);
    return result;
  }, []);
}

function saveState() {
  localStorage.setItem(storageKey, JSON.stringify(state));
}

function render() {
  renderStats();
  renderUnassigned();
  renderReserveGuests();
  renderTables();
  renderFloorPlan();
}

function renderStats() {
  const tables = getTables();
  const assigned = getAssignedIds().size;
  const plannedGuestCount = getPlanningGuests().length;
  const capacity = tables.reduce((sum, table) => sum + table.capacity, 0);
  const roundTables = tables.filter((table) => table.shape === "round");
  const roundAssigned = roundTables
    .reduce((sum, table) => sum + state.assignments[table.id].filter(Boolean).length, 0);
  const roundCapacity = roundTables.reduce((sum, table) => sum + table.capacity, 0);

  statsElement.innerHTML = [
    statHtml(plannedGuestCount, "Na planie"),
    statHtml(assigned, "Przy stołach"),
    statHtml(getUnassignedGuests().length, "Do rozsadzenia"),
    statHtml(capacity - assigned, "Wolne miejsca"),
  ].join("");

  const unassigned = getUnassignedGuests().length;
  planNotice.textContent =
    unassigned === 0
      ? `Wszyscy przypisani. Wolne miejsca przy okrągłych stołach: ${roundCapacity - roundAssigned}.`
      : `Okrągłe stoły: ${roundAssigned}/${roundCapacity}.`;
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

function renderReserveGuests() {
  const availableReserveGuests = reserveGuests.filter((guest) => !isAssigned(guest.id));

  reserveCount.textContent = `${availableReserveGuests.length} osób`;
  reserveList.innerHTML = "";

  if (availableReserveGuests.length === 0) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "Lista jest pusta";
    reserveList.append(empty);
    return;
  }

  availableReserveGuests.forEach((guest) => {
    const chip = createGuestChip(guest.id);
    chip.classList.add("reserve-chip");
    reserveList.append(chip);
  });
}

function renderTables() {
  tablesGrid.innerHTML = "";

  getTables().forEach((table) => {
    const seats = state.assignments[table.id];
    const taken = seats.filter(Boolean).length;
    const card = document.createElement("article");
    card.className = `table-card${table.locked ? " locked" : ""}`;
    card.dataset.shape = table.shape;

    card.innerHTML = `
      <div class="table-head">
        <div class="table-symbol" aria-hidden="true"></div>
        <div class="table-title">
          <strong>${escapeHtml(table.name)}</strong>
          <span class="capacity">${table.locked ? "stały skład" : `${table.capacity} miejsc`}</span>
        </div>
        <div class="status-pill">${taken}/${table.capacity}</div>
        ${
          table.locked
            ? ""
            : `<div class="table-actions">
                <button class="seat-count-button" data-seat-action="decrease" type="button" title="Usuń miejsce" aria-label="Usuń miejsce" ${table.capacity <= minEditableTableCapacity ? "disabled" : ""}>−</button>
                <button class="seat-count-button" data-seat-action="increase" type="button" title="Dodaj miejsce" aria-label="Dodaj miejsce" ${table.capacity >= maxEditableTableCapacity ? "disabled" : ""}>+</button>
                <button class="remove-table" type="button" title="Usuń stół" aria-label="Usuń stół">×</button>
              </div>`
        }
      </div>
    `;

    const seatList = document.createElement("div");
    seatList.className = "seat-list";

    seats.forEach((guestId, index) => {
      seatList.append(createSeat(table, index, guestId));
    });

    card.append(seatList);
    if (!table.locked) {
      card.querySelector('[data-seat-action="decrease"]').addEventListener("click", (event) => {
        event.stopPropagation();
        changeTableCapacity(table.id, -1);
      });
      card.querySelector('[data-seat-action="increase"]').addEventListener("click", (event) => {
        event.stopPropagation();
        changeTableCapacity(table.id, 1);
      });
      card.querySelector(".remove-table").addEventListener("click", (event) => {
        event.stopPropagation();
        removeTable(table.id);
      });
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

function renderFloorPlan() {
  floorPlan.innerHTML = "";

  const hall = document.createElement("div");
  hall.className = "hall-map";
  const roundTableCount = getTables().filter((table) => table.id !== "rectangular").length;
  hall.style.minHeight = `${1160 + Math.max(0, Math.ceil((roundTableCount - 8) / 3)) * 320}px`;
  hall.innerHTML = `
    <div class="hall-title">Wersja 1</div>
    <div class="hall-label hall-label-left">(OPCJA I)</div>
    <div class="hall-label hall-label-right">wejście / wyjście</div>
    <div class="hall-door hall-door-top hall-door-top-1"></div>
    <div class="hall-door hall-door-top hall-door-top-2"></div>
    <div class="hall-door hall-door-top hall-door-top-3"></div>
    <div class="hall-door hall-door-top hall-door-top-4"></div>
    <div class="hall-door hall-door-side hall-door-left-1"></div>
    <div class="hall-door hall-door-side hall-door-left-2"></div>
    <div class="hall-door hall-door-side hall-door-right-1"></div>
    <div class="hall-door hall-door-side hall-door-right-2"></div>
  `;

  const rectangularTable = getTables().find((table) => table.id === "rectangular");
  if (rectangularTable) {
    hall.append(createRectangularVisualTable(rectangularTable));
  }

  getTables()
    .filter((table) => table.id !== "rectangular")
    .forEach((table, index) => {
      hall.append(createRoundVisualTable(table, index));
    });

  floorPlan.append(hall);
}

function createRectangularVisualTable(table) {
  const wrapper = document.createElement("div");
  wrapper.className = "visual-table visual-rect-table";
  wrapper.style.left = "170px";
  wrapper.style.top = "430px";

  const seats = state.assignments[table.id];
  wrapper.append(createVisualSeatColumn(seats, "left"));

  const core = document.createElement("div");
  core.className = "visual-rect-core";
  core.innerHTML = `
    <strong>${escapeHtml(table.name)}</strong>
    <span>${seats.filter(Boolean).length}/${table.capacity}</span>
  `;
  wrapper.append(core);

  return wrapper;
}

function createVisualSeatColumn(guestIds, side) {
  const column = document.createElement("div");
  column.className = `visual-seat-column ${side}`;

  guestIds.forEach((guestId, index) => {
    column.append(createVisualSeatLabel(guestId, `Miejsce ${index + 1}`));
  });

  return column;
}

function createRoundVisualTable(table, index) {
  const position = getRoundTablePosition(index);
  const wrapper = document.createElement("div");
  wrapper.className = "visual-table visual-round-table";
  wrapper.style.left = `${position.left}px`;
  wrapper.style.top = `${position.top}px`;

  const core = document.createElement("div");
  core.className = "visual-round-core";
  core.innerHTML = `
    <strong>${escapeHtml(table.name.replace("Stół okrągły ", "Stół "))}</strong>
    <span>${state.assignments[table.id].filter(Boolean).length}/${table.capacity}</span>
  `;
  wrapper.append(core);

  state.assignments[table.id].forEach((guestId, seatIndex) => {
    const label = createVisualSeatLabel(guestId, String(seatIndex + 1));
    const angle = -90 + (360 / table.capacity) * seatIndex;
    label.classList.add("visual-orbit-seat");
    label.style.setProperty("--angle", `${angle}deg`);
    label.style.setProperty("--reverse-angle", `${-angle}deg`);
    label.style.setProperty("--radius", `${Math.max(160, Math.min(185, 135 + table.capacity * 3))}px`);
    wrapper.append(label);
  });

  return wrapper;
}

function createVisualSeatLabel(guestId, fallbackText) {
  const label = document.createElement("div");
  const guest = guestId ? getGuestById(guestId) : null;

  label.className = `visual-seat-label${guest ? "" : " empty"}`;
  label.textContent = guest ? guest.name : fallbackText;
  label.title = guest ? guest.name : "Wolne miejsce";

  return label;
}

function getRoundTablePosition(index) {
  const basePositions = [
    { left: 560, top: 185 },
    { left: 1010, top: 175 },
    { left: 1460, top: 190 },
    { left: 1910, top: 210 },
    { left: 560, top: 585 },
    { left: 1010, top: 575 },
    { left: 1460, top: 585 },
    { left: 1010, top: 970 },
  ];

  if (index < basePositions.length) {
    return basePositions[index];
  }

  const extraIndex = index - basePositions.length;
  return {
    left: 560 + (extraIndex % 3) * 450,
    top: 1280 + Math.floor(extraIndex / 3) * 320,
  };
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
  const guest = getGuestById(guestId);
  if (!guest) {
    const missing = document.createElement("div");
    missing.className = "empty-state";
    missing.textContent = "Nieznana osoba";
    return missing;
  }

  const chip = document.createElement("div");
  const isCustom = isCustomGuest(guestId);
  const isReserve = reserveGuests.some((reserveGuest) => reserveGuest.id === guestId);

  chip.className = `guest-chip${locked || lockedGuestIds.has(guestId) ? " locked" : ""}`;
  chip.draggable = !(locked || lockedGuestIds.has(guestId));
  chip.dataset.guestId = guestId;
  chip.tabIndex = 0;
  chip.title = guest.row ? `${guest.name}, wiersz Excela ${guest.row}` : `${guest.name}, dodany ręcznie`;

  const meta = getGuestMeta(guest, isReserve, isCustom);
  chip.innerHTML = `
    <span class="guest-main">
      <span class="guest-name">${escapeHtml(guest.name)}</span>
      ${meta ? `<span class="guest-meta">${escapeHtml(meta)}</span>` : ""}
    </span>
  `;

  const actions = document.createElement("span");
  actions.className = "chip-actions";

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
    actions.append(remove);
  }

  if (isCustom) {
    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-custom-guest";
    deleteButton.type = "button";
    deleteButton.setAttribute("aria-label", `Usuń ${guest.name} z listy`);
    deleteButton.textContent = "Usuń";
    deleteButton.addEventListener("click", (event) => {
      event.stopPropagation();
      deleteCustomGuest(guestId);
    });
    actions.append(deleteButton);
  }

  if (actions.children.length > 0) {
    chip.append(actions);
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
  if (!guestId || lockedGuestIds.has(guestId) || !getGuestById(guestId)) {
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
  if (!guestId || lockedGuestIds.has(guestId) || !getGuestById(guestId)) {
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

function changeTableCapacity(tableId, delta) {
  const table = getTables().find((item) => item.id === tableId);
  if (!table || table.locked) {
    return;
  }

  if (delta > 0) {
    if (table.capacity >= maxEditableTableCapacity) {
      showToast(`Maksymalnie ${maxEditableTableCapacity} miejsc przy stole`);
      return;
    }

    table.capacity += 1;
    state.assignments[table.id].push(null);
    persistAndRender();
    return;
  }

  if (table.capacity <= minEditableTableCapacity) {
    showToast(`Minimum to ${minEditableTableCapacity} miejsc przy stole`);
    return;
  }

  const seats = state.assignments[table.id];
  const emptyIndex = seats.lastIndexOf(null);
  const removeIndex = emptyIndex === -1 ? seats.length - 1 : emptyIndex;
  const [removedGuestId] = seats.splice(removeIndex, 1);
  table.capacity -= 1;
  selectedGuestId = selectedGuestId === removedGuestId ? null : selectedGuestId;
  persistAndRender();

  if (removedGuestId) {
    showToast("Usunięte miejsce było zajęte, gość wrócił na listę");
  }
}

function addTable() {
  const table = {
    id: `custom-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`,
    name: `Stół okrągły ${getNextRoundTableNumber()}`,
    capacity: 10,
    shape: "round",
    locked: false,
  };

  state.tables.push(table);
  state.assignments[table.id] = Array(table.capacity).fill(null);
  selectedGuestId = null;
  persistAndRender();
  showToast(`Dodano ${table.name}`);
}

function removeTable(tableId) {
  const table = getTables().find((item) => item.id === tableId);
  if (!table || table.locked) {
    return;
  }

  const assignedCount = state.assignments[tableId].filter(Boolean).length;
  const confirmed =
    assignedCount === 0 ||
    window.confirm(
      `Usunąć ${table.name}? ${assignedCount} gości wróci do listy nieprzydzielonych.`,
    );

  if (!confirmed) {
    return;
  }

  state.tables = state.tables.filter((item) => item.id !== tableId);
  delete state.assignments[tableId];
  selectedGuestId = null;
  persistAndRender();
  showToast(`Usunięto ${table.name}`);
}

function addCustomGuest(event) {
  event.preventDefault();
  const name = newGuestNameInput.value.trim();

  if (!name) {
    showToast("Wpisz imię i nazwisko");
    return;
  }

  const guest = {
    id: `custom-guest-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`,
    name,
    custom: true,
  };

  state.customGuests.push(guest);
  newGuestNameInput.value = "";
  searchInput.value = "";
  persistAndRender();
  showToast(`Dodano ${name}`);
}

function deleteCustomGuest(guestId) {
  const guest = getGuestById(guestId);
  if (!guest || !isCustomGuest(guestId)) {
    return;
  }

  const location = findGuestLocation(guestId);
  const confirmed =
    !location || window.confirm(`Usunąć ${guest.name}? Osoba zniknie też z przypisanego stołu.`);

  if (!confirmed) {
    return;
  }

  if (location) {
    state.assignments[location.tableId][location.index] = null;
  }

  state.customGuests = state.customGuests.filter((customGuest) => customGuest.id !== guestId);
  selectedGuestId = selectedGuestId === guestId ? null : selectedGuestId;
  persistAndRender();
  showToast(`Usunięto ${guest.name}`);
}

function getNextRoundTableNumber() {
  return (
    getTables().reduce((highest, table) => {
      const match = /^Stół okrągły (\d+)$/.exec(table.name);
      return match ? Math.max(highest, Number(match[1])) : highest;
    }, 0) + 1
  );
}

function clearRoundTables() {
  getTables()
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
  newGuestNameInput.value = "";
  persistAndRender();
  showToast("Przywrócono układ początkowy");
}

function persistAndRender() {
  saveState();
  render();
}

function getTables() {
  return state.tables;
}

function getAssignedIds() {
  const ids = new Set();
  getTables().forEach((table) => {
    state.assignments[table.id].forEach((guestId) => {
      if (guestId) {
        ids.add(guestId);
      }
    });
  });
  return ids;
}

function getPlanningGuests() {
  const assigned = getAssignedIds();
  const assignedReserveGuests = reserveGuests.filter((guest) => assigned.has(guest.id));
  return [...guests, ...state.customGuests, ...assignedReserveGuests];
}

function getUnassignedGuests() {
  const assigned = getAssignedIds();
  return [...guests, ...state.customGuests].filter((guest) => !assigned.has(guest.id));
}

function isAssigned(guestId) {
  return Boolean(findGuestLocation(guestId));
}

function getGuestById(guestId) {
  return staticGuestById.get(guestId) || state.customGuests.find((guest) => guest.id === guestId);
}

function isCustomGuest(guestId) {
  return state.customGuests.some((guest) => guest.id === guestId);
}

function getNameCount(name) {
  return [...guests, ...reserveGuests, ...state.customGuests].filter((guest) => guest.name === name).length;
}

function getGuestMeta(guest, isReserve, isCustom) {
  if (isCustom) {
    return "dodany ręcznie";
  }

  if (isReserve) {
    return `rezerwowy, wiersz ${guest.row}`;
  }

  return getNameCount(guest.name) > 1 ? `wiersz ${guest.row}` : "";
}

function findGuestLocation(guestId) {
  for (const table of getTables()) {
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

function savePlanToFile() {
  const payload = {
    version: 3,
    exportedAt: new Date().toISOString(),
    tables: state.tables,
    assignments: state.assignments,
    customGuests: state.customGuests,
  };
  const json = JSON.stringify(payload, null, 2);
  const blob = new Blob([json], { type: "application/json;charset=utf-8" });
  downloadBlob(blob, `plan-stolow-wesele-${new Date().toISOString().slice(0, 10)}.json`);
  showToast("Zapisano plan stołów");
}

async function importPlanFromFile(event) {
  const file = event.target.files?.[0];
  if (!file) {
    return;
  }

  try {
    const parsed = JSON.parse(await file.text());
    const nextState = normalizeState(parsed);
    if (!nextState) {
      throw new Error("Invalid plan file");
    }

    state = nextState;
    selectedGuestId = null;
    searchInput.value = "";
    newGuestNameInput.value = "";
    persistAndRender();
    showToast("Wczytano plan stołów");
  } catch {
    showToast("Nie udało się wczytać pliku planu");
  } finally {
    event.target.value = "";
  }
}

function exportCsv() {
  const rows = [["Stół", "Miejsce", "Osoba", "Wiersz Excela"]];

  getTables().forEach((table) => {
    state.assignments[table.id].forEach((guestId, index) => {
      const guest = guestId ? getGuestById(guestId) : null;
      rows.push([
        table.name,
        String(index + 1),
        guest ? guest.name : "",
        guest?.row ? String(guest.row) : "",
      ]);
    });
  });

  getUnassignedGuests().forEach((guest) => {
    rows.push(["Nieprzydzieleni", "", guest.name, guest.row ? String(guest.row) : ""]);
  });

  reserveGuests.filter((guest) => !isAssigned(guest.id)).forEach((guest) => {
    rows.push(["Rezerwowi", "", guest.name, String(guest.row)]);
  });

  const csv = rows
    .map((row) => row.map((cell) => `"${String(cell).replaceAll('"', '""')}"`).join(";"))
    .join("\n");
  const blob = new Blob([`\uFEFF${csv}`], { type: "text/csv;charset=utf-8" });
  downloadBlob(blob, "plan-stolow-wesele.csv");
}

function downloadBlob(blob, fileName) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = fileName;
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;",
    };
    return entities[character];
  });
}

function showToast(message) {
  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("visible");
  toastTimer = setTimeout(() => {
    toast.classList.remove("visible");
  }, 2200);
}
