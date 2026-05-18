// ════════════════════════════════════════════════════════════
// DATOS DEL CUESTIONARIO
// ════════════════════════════════════════════════════════════
const DIMS = [
  {
    nombre: "Gobernanza y gestión institucional",
    desc: "Evalúa la existencia de estructuras organizacionales que favorecen la toma de decisiones académicas.",
    items: [
      "La gestión administrativa de la universidad facilita el desarrollo de las actividades académicas.",
      "En la planeación de la universidad participan diversas personas de la comunidad universitaria (directivos, docentes u otros actores).",
      "Las decisiones que se toman en la universidad buscan mejorar tanto la formación académica como el aporte social de la institución.",
      "Los procesos administrativos apoyan y facilitan el trabajo académico de la universidad.",
      "En la institución se promueve la transparencia y la rendición de cuentas en las decisiones y acciones que se toman."
    ]
  },
  {
    nombre: "Desarrollo académico y formación profesional",
    desc: "Analiza cómo la institución promueve la calidad de la formación universitaria.",
    items: [
      "Los programas educativos incorporan contenidos relacionados con la diversidad cultural y social del país.",
      "Los programas educativos consideran el respeto a la diversidad cultural y lingüística en los procesos de formación.",
      "En los procesos de formación se fomenta el desarrollo del pensamiento crítico y reflexivo en los estudiantes.",
      "La formación que ofrece la universidad busca el desarrollo integral de los estudiantes, no solo en el ámbito académico.",
      "Los programas educativos utilizan tecnologías y herramientas que fortalecen el aprendizaje.",
      "La universidad revisa si los estudiantes realmente cumplen el perfil de egreso esperado al finalizar sus estudios."
    ]
  },
  {
    nombre: "Investigación y generación de conocimiento",
    desc: "Explora el apoyo institucional a la investigación científica y al desarrollo académico.",
    items: [
      "La universidad impulsa proyectos de investigación relacionados con las comunidades indígenas o afrodescendientes.",
      "La institución promueve investigaciones orientadas al análisis de la diversidad cultural y lingüística.",
      "La institución facilita recursos o apoyos para desarrollar proyectos académicos o de investigación.",
      "Se promueve que los resultados de investigación se publiquen o se compartan con otros sectores académicos y sociales.",
      "Las investigaciones realizadas en la universidad buscan contribuir a la solución de los problemas de la sociedad."
    ]
  },
  {
    nombre: "Vinculación e impacto social",
    desc: "Evalúa la relación entre la universidad y su entorno social.",
    items: [
      "La universidad mantiene colaboración con sectores sociales, productivos o gubernamentales.",
      "Los programas educativos incluyen actividades que permiten a los estudiantes relacionarse con la comunidad o el entorno social.",
      "Estudiantes y docentes participan en proyectos orientados a beneficiar a la sociedad.",
      "La universidad desarrolla proyectos académicos que promueven el respeto a la diversidad cultural y social.",
      "La institución participa en iniciativas que buscan fortalecer la inclusión social en su entorno.",
      "Las actividades de vinculación institucional promueven el respeto y la valoración de la diversidad cultural."
    ]
  },
  {
    nombre: "Inclusión, equidad e interculturalidad",
    desc: "Evalúa políticas institucionales orientadas a la igualdad, la inclusión y el respeto a la diversidad.",
    items: [
      "La universidad cuenta con políticas institucionales que promueven la igualdad de género en la comunidad universitaria.",
      "La institución reconoce y respeta la diversidad de identidades de género entre estudiantes y personal.",
      "Existen protocolos institucionales para prevenir y atender situaciones de discriminación o violencia de género.",
      "La universidad promueve espacios seguros e inclusivos para personas de distintas identidades de género, incluidas las no binarias.",
      "La universidad promueve el respeto a la diversidad de identidades y expresiones de género.",
      "La institución cuenta con políticas para prevenir la discriminación por motivos de género.",
      "La universidad promueve acciones que favorecen la inclusión de las personas afrodescendientes en la comunidad universitaria.",
      "La universidad reconoce la diversidad cultural y lingüística de su comunidad estudiantil.",
      "La institución promueve acciones que favorecen la participación de estudiantes de pueblos indígenas.",
      "La universidad implementa acciones para facilitar el acceso y permanencia de estudiantes con discapacidad.",
      "La institución realiza adecuaciones o brinda apoyos a estudiantes con discapacidad."
    ]
  },
  {
    nombre: "Evaluación institucional y mejora continua",
    desc: "Analiza los procesos institucionales orientados al monitoreo, evaluación y mejora permanente.",
    items: [
      "La universidad cuenta con áreas o equipos encargados de revisar y mejorar los procesos académicos e institucionales.",
      "La institución realiza evaluaciones periódicas para conocer cómo funcionan sus programas y actividades.",
      "En estos procesos de evaluación participan diversos actores de la comunidad universitaria.",
      "Los resultados de las evaluaciones se utilizan para mejorar la universidad.",
      "La institución utiliza información y datos académicos para apoyar la toma de decisiones.",
      "La universidad identifica y comparte prácticas exitosas que pueden contribuir a mejorar el trabajo institucional.",
      "Existe un plan de mejora institucional con responsables y seguimiento para asegurar el cumplimiento de las acciones."
    ]
  }
];

const ESCALA = [
  { v: 1, lbl: "Totalmente en desacuerdo" },
  { v: 2, lbl: "En desacuerdo" },
  { v: 3, lbl: "De acuerdo" },
  { v: 4, lbl: "Totalmente de acuerdo" }
];

// Lista plana de todos los ítems con número global
const ALL_ITEMS = [];
DIMS.forEach((d, di) => d.items.forEach((text, ii) => ALL_ITEMS.push({ num: ALL_ITEMS.length + 1, text, di, ii })));

// ════════════════════════════════════════════════════════════
// CONSTANTES
// ════════════════════════════════════════════════════════════
const ADMIN_INST  = 'ICC-Admin';   // "usuario" del administrador
const ADMIN_PASS  = 'Admin2026*';
const STORE_KEY   = 'icc_data';
const SESSION_KEY = 'icc_session';

// ════════════════════════════════════════════════════════════
// UTILIDADES
// ════════════════════════════════════════════════════════════
async function sha256(msg) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(msg));
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('');
}

function uuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = Math.random() * 16 | 0;
    return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
}

function getData()         { try { return JSON.parse(localStorage.getItem(STORE_KEY)) || { usuarios: [], respuestas: [] }; } catch { return { usuarios: [], respuestas: [] }; } }
function saveData(d)       { localStorage.setItem(STORE_KEY, JSON.stringify(d)); }
function getSession()      { try { return JSON.parse(sessionStorage.getItem(SESSION_KEY)); } catch { return null; } }
function setSession(t, id) { sessionStorage.setItem(SESSION_KEY, JSON.stringify({ token: t, userId: id })); }
function clearSession()    { sessionStorage.removeItem(SESSION_KEY); }

function fmtDate(iso) {
  if (!iso) return '—';
  return new Date(iso).toLocaleString('es-MX', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' });
}

function esc(s) {
  return String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function showAlert(id, msg, type = 'error') {
  const el = document.getElementById(id);
  if (!el) return;
  el.textContent = msg;
  el.className = `alert alert-${type} show`;
}
function hideAlert(id) { const el = document.getElementById(id); if (el) el.className = 'alert alert-error'; }

// ════════════════════════════════════════════════════════════
// ROUTER
// ════════════════════════════════════════════════════════════
function showView(id) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  const sess = getSession();
  document.getElementById('btn-logout').style.display =
    (sess && id !== 'view-login' && id !== 'view-register') ? 'block' : 'none';
}

// ════════════════════════════════════════════════════════════
// INICIALIZACIÓN
// ════════════════════════════════════════════════════════════
async function init() {
  // Crear cuenta admin si no existe
  const data = getData();
  if (!data.usuarios.some(u => u.institucion === ADMIN_INST)) {
    data.usuarios.push({
      id: uuid(),
      nombre: 'Administrador ICC',
      institucion: ADMIN_INST,
      password_hash: await sha256(ADMIN_PASS),
      fecha_registro: new Date().toISOString(),
      respondido: false,
      es_admin: true
    });
    saveData(data);
  }

  // Restaurar sesión existente
  const sess = getSession();
  if (sess) {
    const user = getData().usuarios.find(u => u.id === sess.userId);
    if (user) {
      if (user.es_admin)   { renderAdmin();  showView('view-admin');   return; }
      if (user.respondido) {                 showView('view-thankyou'); return; }
      renderSurvey();                        showView('view-survey');  return;
    }
  }
  showView('view-login');
}

// ════════════════════════════════════════════════════════════
// AUTENTICACIÓN
// ════════════════════════════════════════════════════════════
async function register(e) {
  e.preventDefault();
  const nombre = document.getElementById('r-nombre').value.trim();
  const inst   = document.getElementById('r-inst').value.trim();
  const pass   = document.getElementById('r-pass').value;

  let ok = true;
  function fe(id, cond) { document.getElementById(id).classList.toggle('show', !cond); if (!cond) ok = false; }
  fe('fe-nombre', nombre.length > 0);
  fe('fe-inst',   inst.length > 0);
  fe('fe-pass',   pass.length >= 8);
  if (!ok) return;

  // Bloquear el nombre reservado del admin
  if (inst === ADMIN_INST) {
    showAlert('reg-err', 'Ese nombre de institución no está disponible.'); return;
  }

  const data = getData();
  // Verificar unicidad por institución (insensible a mayúsculas)
  if (data.usuarios.some(u => u.institucion.toLowerCase() === inst.toLowerCase())) {
    showAlert('reg-err', 'Ya existe una cuenta para esa institución.'); return;
  }
  hideAlert('reg-err');

  const btn = document.getElementById('btn-reg');
  btn.disabled = true; btn.textContent = 'Registrando…';
  try {
    const newUser = {
      id: uuid(), nombre, institucion: inst,
      password_hash: await sha256(pass),
      fecha_registro: new Date().toISOString(),
      respondido: false, es_admin: false
    };
    data.usuarios.push(newUser);
    saveData(data);
    setSession(uuid(), newUser.id);
    renderSurvey(); showView('view-survey');
  } finally { btn.disabled = false; btn.textContent = 'Crear cuenta'; }
}

async function login(e) {
  e.preventDefault();
  const inst = document.getElementById('l-inst').value.trim();
  const pass = document.getElementById('l-pass').value;
  hideAlert('login-err');

  const btn = document.getElementById('btn-login');
  btn.disabled = true; btn.textContent = 'Verificando…';
  try {
    const hash = await sha256(pass);
    const data = getData();
    const user = data.usuarios.find(u =>
      u.institucion.toLowerCase() === inst.toLowerCase() && u.password_hash === hash
    );
    if (!user) { showAlert('login-err', 'Institución o contraseña incorrectos.'); return; }

    setSession(uuid(), user.id);
    if (user.es_admin)   { renderAdmin();  showView('view-admin');   return; }
    if (user.respondido) {                 showView('view-thankyou'); return; }
    renderSurvey(); showView('view-survey');
  } finally { btn.disabled = false; btn.textContent = 'Ingresar'; }
}

function logout() { clearSession(); showView('view-login'); }

// ════════════════════════════════════════════════════════════
// CUESTIONARIO
// ════════════════════════════════════════════════════════════
let curTab = 0;
let answers = {};

function renderSurvey() { curTab = 0; answers = {}; buildTabsNav(); buildTabContent(); updateProgress(); }

function isTabDone(di) {
  let start = 1;
  for (let i = 0; i < di; i++) start += DIMS[i].items.length;
  return DIMS[di].items.every((_, ii) => answers[String(start + ii)] !== undefined);
}

function buildTabsNav() {
  document.getElementById('tabs-nav').innerHTML = DIMS.map((d, i) => {
    const cls = [i === curTab ? 'active' : '', isTabDone(i) ? 'done' : ''].filter(Boolean).join(' ');
    return `<button class="tab-btn ${cls}" id="tb-${i}" onclick="goTab(${i})">D${i + 1}. ${esc(d.nombre.split(' ')[0])}</button>`;
  }).join('');
}

function buildTabContent() {
  const d = DIMS[curTab];
  let start = 1;
  for (let i = 0; i < curTab; i++) start += DIMS[i].items.length;

  document.getElementById('tab-content').innerHTML = `
    <div class="dim-header">
      <h3>Dimensión ${curTab + 1}: ${esc(d.nombre)}</h3>
      <p>${esc(d.desc)}</p>
    </div>
    ${d.items.map((txt, ii) => {
      const n = start + ii; const k = String(n); const ans = answers[k];
      return `
        <div class="q-item ${ans !== undefined ? 'answered' : ''}" id="qi-${n}">
          <div class="q-text"><span class="q-num">${n}.</span> ${esc(txt)}</div>
          <div class="likert-opts">
            ${ESCALA.map(opt => `
              <input type="radio" class="lik-radio" id="q${n}v${opt.v}"
                     name="q${n}" value="${opt.v}"
                     ${ans === opt.v ? 'checked' : ''}
                     onchange="pick(${n}, ${opt.v})">
              <label class="lik-lbl" for="q${n}v${opt.v}">${esc(opt.lbl)}</label>
            `).join('')}
          </div>
        </div>`;
    }).join('')}`;

  document.getElementById('btn-prev').style.display = curTab === 0 ? 'none' : 'inline-flex';
  const last = curTab === DIMS.length - 1;
  const nb   = document.getElementById('btn-next');
  nb.textContent = last ? '✔ Enviar cuestionario' : 'Siguiente →';
  nb.className   = last ? 'btn btn-success' : 'btn btn-primary';
}

function pick(n, v) {
  answers[String(n)] = v;
  const qi = document.getElementById(`qi-${n}`);
  if (qi) { qi.classList.add('answered'); qi.classList.remove('unanswered'); }
  updateProgress();
}

function updateProgress() {
  const done = Object.keys(answers).length, total = ALL_ITEMS.length;
  document.getElementById('prog-txt').textContent  = `${done} / ${total} preguntas respondidas`;
  document.getElementById('prog-fill').style.width = `${(done / total) * 100}%`;
  DIMS.forEach((_, i) => {
    const btn = document.getElementById(`tb-${i}`);
    if (btn) {
      btn.classList.toggle('done', isTabDone(i));
      if (i === curTab) btn.classList.add('active');
    }
  });
}

function validateTab() {
  let start = 1;
  for (let i = 0; i < curTab; i++) start += DIMS[i].items.length;
  let ok = true;
  DIMS[curTab].items.forEach((_, ii) => {
    const n  = start + ii;
    const qi = document.getElementById(`qi-${n}`);
    if (answers[String(n)] === undefined) {
      ok = false;
      if (qi) { qi.classList.add('unanswered'); qi.classList.remove('answered'); }
    }
  });
  return ok;
}

function goTab(i)  { curTab = i; buildTabsNav(); buildTabContent(); updateProgress(); }

function nextTab() {
  if (!validateTab()) { alert('Por favor responde todas las preguntas de esta dimensión antes de continuar.'); return; }
  if (curTab === DIMS.length - 1) { submitSurvey(); return; }
  curTab++; buildTabsNav(); buildTabContent(); updateProgress(); window.scrollTo(0, 0);
}
function prevTab() {
  if (curTab > 0) { curTab--; buildTabsNav(); buildTabContent(); updateProgress(); window.scrollTo(0, 0); }
}

async function submitSurvey() {
  if (Object.keys(answers).length < ALL_ITEMS.length) {
    alert('Aún hay preguntas sin responder. Por favor completa el cuestionario.'); return;
  }
  const sess = getSession(); if (!sess) { showView('view-login'); return; }
  const data = getData();
  const idx  = data.usuarios.findIndex(u => u.id === sess.userId);
  if (idx === -1) { showView('view-login'); return; }

  data.respuestas.push({ usuario_id: sess.userId, fecha_respuesta: new Date().toISOString(), respuestas: { ...answers } });
  data.usuarios[idx].respondido = true;
  saveData(data);
  showView('view-thankyou');
}

// ════════════════════════════════════════════════════════════
// PANEL ADMIN
// ════════════════════════════════════════════════════════════
function switchAdmTab(secId, btn) {
  document.querySelectorAll('.adm-section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.adm-tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(secId).classList.add('active');
  btn.classList.add('active');
  if (secId === 'adm-stats') renderStats();
}

function renderAdmin() { renderUsers(); }

function renderUsers() {
  const data  = getData();
  const users = data.usuarios.filter(u => !u.es_admin);
  const done  = users.filter(u => u.respondido).length;

  document.getElementById('stat-cards').innerHTML = `
    <div class="stat-card"><div class="stat-num">${users.length}</div><div class="stat-lbl">Instituciones registradas</div></div>
    <div class="stat-card"><div class="stat-num" style="color:var(--success)">${done}</div><div class="stat-lbl">Han respondido</div></div>
    <div class="stat-card"><div class="stat-num" style="color:var(--warn)">${users.length - done}</div><div class="stat-lbl">Pendientes</div></div>`;

  document.getElementById('users-tbody').innerHTML = users.length === 0
    ? '<tr><td colspan="5" style="text-align:center;color:#64748b;padding:2rem">Sin registros aún.</td></tr>'
    : users.map(u => `
        <tr>
          <td>${esc(u.nombre)}</td>
          <td>${esc(u.institucion)}</td>
          <td>${fmtDate(u.fecha_registro)}</td>
          <td><span class="badge ${u.respondido ? 'badge-ok' : 'badge-pending'}">${u.respondido ? 'Respondió' : 'Pendiente'}</span></td>
          <td>${u.respondido
            ? `<button class="btn btn-secondary btn-sm" onclick="viewResp('${esc(u.id)}')">Ver respuestas</button>`
            : '—'}</td>
        </tr>`).join('');
}

function renderStats() {
  const { respuestas } = getData();
  if (!respuestas.length) {
    document.getElementById('stats-content').innerHTML = '<p style="color:#64748b;text-align:center;padding:3rem">Sin respuestas registradas aún.</p>';
    return;
  }
  let html = '', gn = 1;
  DIMS.forEach((d, di) => {
    let dimSum = 0, dimCnt = 0, itemsHtml = '';
    d.items.forEach(txt => {
      const k    = String(gn);
      const vals = respuestas.map(r => Number(r.respuestas[k])).filter(v => v > 0);
      if (vals.length) {
        const avg    = vals.reduce((a, b) => a + b, 0) / vals.length;
        dimSum += avg; dimCnt++;
        const counts = ESCALA.map(opt => vals.filter(x => x === opt.v).length);
        itemsHtml += `
          <div class="item-stat">
            <div class="item-stat-text"><strong>${gn}.</strong> ${esc(txt)} &nbsp;<em style="color:var(--brand)">(Prom: ${avg.toFixed(2)})</em></div>
            ${ESCALA.map((opt, si) => {
              const pct = Math.round((counts[si] / vals.length) * 100);
              return `<div class="bar-row">
                <div class="bar-lbl">${esc(opt.lbl)}</div>
                <div class="bar-track"><div class="bar-fill bar-c${opt.v}" style="width:${pct}%"></div></div>
                <div class="bar-val">${pct}% (${counts[si]})</div>
              </div>`;
            }).join('')}
          </div>`;
      }
      gn++;
    });
    const davg = dimCnt ? (dimSum / dimCnt).toFixed(2) : '—';
    html += `
      <div class="dim-stat-box">
        <h4>Dimensión ${di + 1}: ${esc(d.nombre)}</h4>
        <div class="dim-avg-line">Promedio: <strong>${davg}</strong> / 4.00 &nbsp;|&nbsp; Respuestas: ${respuestas.length}</div>
        ${itemsHtml}
      </div>`;
  });
  document.getElementById('stats-content').innerHTML = html;
}

function viewResp(userId) {
  const data = getData();
  const user = data.usuarios.find(u => u.id === userId);
  const resp = data.respuestas.find(r => r.usuario_id === userId);
  if (!user || !resp) return;

  document.getElementById('modal-title').textContent = `Respuestas: ${user.nombre}`;
  let html = `<p style="color:#64748b;font-size:.82rem;margin-bottom:1.1rem">
    Institución: <strong>${esc(user.institucion)}</strong> &nbsp;|&nbsp; Fecha: ${fmtDate(resp.fecha_respuesta)}
  </p>`;
  let gn = 1;
  DIMS.forEach((d, di) => {
    html += `<h4 style="color:var(--brand);margin:1rem 0 .45rem">Dimensión ${di + 1}: ${esc(d.nombre)}</h4>`;
    d.items.forEach(txt => {
      const val = Number(resp.respuestas[String(gn)]);
      const lbl = ESCALA.find(e => e.v === val)?.lbl || '—';
      html += `<div style="display:flex;gap:.7rem;padding:.42rem 0;border-bottom:1px solid #f1f5f9;font-size:.82rem">
        <span style="font-weight:700;color:var(--brand);min-width:24px">${gn}.</span>
        <span style="flex:1;color:#374151">${esc(txt)}</span>
        <span style="min-width:175px;text-align:right;color:var(--brand);font-weight:600">${esc(lbl)}</span>
      </div>`;
      gn++;
    });
  });
  document.getElementById('modal-body').innerHTML = html;
  document.getElementById('modal').classList.add('open');
}

function closeModal() { document.getElementById('modal').classList.remove('open'); }

function exportCSV() {
  const data    = getData();
  const headers = ['ID', 'Nombre', 'Institución', 'Fecha Registro', 'Fecha Respuesta',
    ...ALL_ITEMS.map(i => `P${i.num}`)];
  const rows = data.usuarios.filter(u => !u.es_admin).map(u => {
    const r = data.respuestas.find(x => x.usuario_id === u.id);
    return [u.id, u.nombre, u.institucion, u.fecha_registro, r ? r.fecha_respuesta : '',
      ...ALL_ITEMS.map(i => r ? (r.respuestas[String(i.num)] || '') : '')];
  });
  const csv = [headers, ...rows]
    .map(row => row.map(c => `"${String(c).replace(/"/g, '""')}"`).join(','))
    .join('\r\n');
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8;' }));
  a.download = `COEPES_Veracruz_2026_${new Date().toISOString().slice(0, 10)}.csv`;
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
}

// ════════════════════════════════════════════════════════════
// ARRANQUE
// ════════════════════════════════════════════════════════════
init();
