// ════════════════════════════════════════════════════════════
// DATOS DEL CUESTIONARIO — Diagnóstico Estatal 2026 (36 ítems / 7 dimensiones)
// ════════════════════════════════════════════════════════════
const DIMS = [
  {
    nombre: "Gobernanza institucional, gestión y transparencia",
    desc: "Evalúa las estructuras organizacionales y la toma de decisiones, identificando el grado en que los procesos de liderazgo, planeación estratégica y gestión normativa operan bajo lógicas democráticas, participativas y éticas orientadas al soporte de las funciones sustantivas.",
    items: [
      "Los procesos burocráticos y administrativos de la institución están diseñados específicamente para agilizar el desarrollo de las funciones académicas.",
      "La planeación estratégica institucional integra de manera efectiva las propuestas emanadas de los diversos sectores de la comunidad educativa.",
      "Los mecanismos de toma de decisiones implementados por el cuerpo directivo operan bajo principios comprobables de transparencia.",
      "La institución ejecuta estrategias sistemáticas de rendición de cuentas sobre el uso de recursos hacia la comunidad interna y la sociedad civil.",
      "Las normativas, leyes orgánicas o reglamentos internos se actualizan periódicamente para responder a las transformaciones del entorno sociopolítico."
    ]
  },
  {
    nombre: "Desarrollo académico, formación profesional y excelencia",
    desc: "Evalúa cómo el modelo educativo, la arquitectura de los planes de estudio y las trayectorias curriculares garantizan el mejoramiento integral constante, el bienestar del estudiante y el máximo logro de los aprendizajes.",
    items: [
      "Los programas educativos se estructuran explícitamente para garantizar el bienestar, el desarrollo integral y el máximo logro de aprendizaje del estudiantado.",
      "Las estrategias pedagógicas implementadas por la plantilla docente estimulan el análisis riguroso y el pensamiento crítico frente a la realidad social.",
      "La institución aplica mecanismos estandarizados para evaluar la congruencia entre el perfil de egreso y el desempeño real del estudiantado.",
      "El rediseño de los planes y programas de estudio se fundamenta en un diagnóstico continuo de las necesidades profesionales emergentes en el entorno local y global.",
      "La formación académica transversaliza el fortalecimiento de habilidades socioemocionales, la responsabilidad ciudadana y los valores éticos."
    ]
  },
  {
    nombre: "Investigación, generación de conocimiento e innovación social",
    desc: "Evalúa las políticas, el financiamiento y la infraestructura dispuestos para impulsar la investigación científica, el desarrollo tecnológico y las humanidades, midiendo el fomento a la productividad académica y la apropiación social del conocimiento.",
    items: [
      "La institución otorga los recursos logísticos y financieros suficientes para garantizar la viabilidad y sostenimiento de los proyectos de investigación.",
      "Las Líneas de Generación y Aplicación del Conocimiento (LGAC) de la institución —Cuerpos Académicos o Grupos de Investigación— se orientan prioritariamente hacia la resolución de problemáticas locales y regionales.",
      "Existen políticas institucionales efectivas que incentivan la publicación científica, la divulgación y la transferencia tecnológica de los hallazgos de investigación.",
      "La institución promueve el desarrollo de proyectos interdisciplinarios de innovación social impulsados conjuntamente por el personal docente y el estudiantado.",
      "Se fomenta sistemáticamente la investigación aplicada orientada a mitigar las brechas de desigualdad socioeconómica en las comunidades del entorno."
    ]
  },
  {
    nombre: "Vinculación, extensión y compromiso con la responsabilidad social",
    desc: "Evalúa la densidad, pertinencia y calidad de las redes de colaboración que la IES establece con los sectores público, privado, productivo y con la sociedad civil, en apego al criterio CRS definido en la PNEAES.",
    items: [
      "La institución mantiene convenios activos, vigentes y funcionales de colaboración con los sectores productivos, gubernamentales y de la sociedad civil.",
      "Los trayectos formativos exigen el involucramiento práctico del estudiantado en el diagnóstico participativo y atención de las necesidades de la comunidad.",
      "Las actividades formales de extensión y difusión institucional impactan de manera directa y medible en el desarrollo socioeconómico y cultural de la región.",
      "El Servicio Social y las Prácticas Profesionales están estructuralmente diseñados para retribuir soluciones concretas y sostenibles a problemáticas sociales.",
      "La institución fomenta el desarrollo de proyectos de emprendimiento que priorizan explícitamente la sostenibilidad medioambiental y la economía solidaria."
    ]
  },
  {
    nombre: "Inclusión, equidad de género e interculturalidad",
    desc: "Evalúa el grado en que la IES ha desmantelado las barreras estructurales de discriminación, en apego al ACUERDO SECRETARIAL SEV/DEN/1AC/2024 y los criterios ESG, INC e INT de la PNEAES.",
    items: [
      "La institución implementa acciones afirmativas concretas para garantizar el ingreso, la permanencia y el egreso oportuno de estudiantes provenientes de grupos históricamente vulnerados.",
      "Las políticas institucionales aseguran que la infraestructura física, tecnológica y los materiales didácticos sean totalmente accesibles para la comunidad con discapacidad.",
      "La normatividad interna cuenta con protocolos efectivos que previenen, investigan, sancionan y buscan erradicar toda forma de acoso o violencia de género.",
      "La cultura organizacional promueve activamente el respeto, la no discriminación y el reconocimiento pleno de la diversidad de identidades y expresiones de género.",
      "El diseño curricular y las prácticas pedagógicas incorporan metodologías que visibilizan y valoran los saberes de los pueblos originarios y comunidades afrodescendientes.",
      "La institución fomenta la preservación, el uso y el desarrollo de la diversidad lingüística de la región mediante actividades formativas y de investigación específicas."
    ]
  },
  {
    nombre: "Evaluación institucional, gestión de datos y mejora continua",
    desc: "Evalúa si la IES logra cambios culturales respecto a la autoevaluación y su relación con la toma de decisiones estratégicas, en cuanto a autorregulación, reflexión colectiva y perfeccionamiento constante.",
    items: [
      "La institución cuenta con un sistema —articulado— de autoevaluación que monitorea sistemáticamente el desempeño cualitativo y cuantitativo de sus procesos académicos.",
      "Las decisiones de planeación estratégica y la asignación de presupuestos se fundamentan en el análisis de datos e indicadores de desempeño institucional.",
      "Los procesos de evaluación interna se caracterizan por integrar activamente la voz, opinión y retroalimentación de la comunidad institucional.",
      "Los hallazgos derivados de las autoevaluaciones se evidencian en planes de mejora continua que cuentan con metas, indicadores de éxito y responsables institucionales claramente definidos.",
      "La institución posee mecanismos estandarizados para identificar, sistematizar, documentar y difundir las buenas prácticas educativas y de gestión que surgen de su propio entorno."
    ]
  },
  {
    nombre: "Innovación educativa, multimodalidad y desarrollo tecnológico",
    desc: "Evalúa la habilidad y resiliencia de la institución para trascender los modelos tradicionales e integrar ecosistemas digitales, modalidades no escolarizadas y entornos híbridos de aprendizaje. (Propuesta original COEPES, criterio Vanguardia de la PNEAES)",
    items: [
      "El modelo educativo —pedagógico o académico— de la institución incorpora esquemas de innovación educativa fundamentados en la apropiación estratégica, ética y crítica de tecnologías digitales.",
      "La institución prioriza la inversión de recursos financieros en el mantenimiento, seguridad y actualización constante de sus plataformas tecnológicas y entornos virtuales de aprendizaje.",
      "Se ejecutan programas formativos permanentes y obligatorios para la alfabetización y consolidación de competencias digitales técnico-pedagógicas dirigidos al personal académico.",
      "La institución promueve activamente la democratización, diversificación y flexibilización de su oferta académica a través de modalidades no escolarizadas, mixtas, abiertas o a distancia.",
      "El acervo bibliográfico y los repositorios de información institucional aseguran a la comunidad un acceso remoto, actualizado y sin barreras técnicas a las bases de datos de investigación global."
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
      nombre: 'Administrador COEPES',
      institucion: ADMIN_INST,
      password_hash: await sha256(ADMIN_PASS),
      fecha_registro: new Date().toISOString(),
      respondido: false,
      es_admin: true
    });
    saveData(data);
    await seedDemoData();
  }
  await seedDemoData();   // también corre si el admin ya existía pero no hay instituciones

  // Restaurar sesión existente
  const sess = getSession();
  if (sess) {
    const user = getData().usuarios.find(u => u.id === sess.userId);
    if (user) {
      if (user.es_admin)   { renderAdmin();  showView('view-admin');   return; }
      if (user.respondido) { renderThankYou(user.id); showView('view-thankyou'); return; }
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
    if (user.respondido) { renderThankYou(user.id); showView('view-thankyou'); return; }
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
  renderThankYou(sess.userId);
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
  if (secId === 'adm-comp')  renderComparative();
}

function renderAdmin() { _compSelected = null; renderUsers(); }

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



// ════════════════════════════════════════════════════════════
// HELPERS: CDN CHECK · AVERAGES · SCORING
// ════════════════════════════════════════════════════════════
function checkCDN(lib) {
  const ok = lib === 'chart' ? typeof Chart !== 'undefined'
                             : typeof window.jspdf !== 'undefined';
  if (!ok) alert('Esta función requiere conexión a internet.\nPor favor conecta el equipo e intenta nuevamente.');
  return ok;
}

function calcDimAvgs(respuestas) {
  let gn = 1;
  return DIMS.map(d => {
    const vals = d.items.map(() => Number(respuestas[String(gn++)])).filter(v => v > 0);
    return vals.length ? vals.reduce((a, b) => a + b, 0) / vals.length : 0;
  });
}

function scoreLabel(avg) {
  if (avg >= 3.5) return 'Muy favorable';
  if (avg >= 2.5) return 'Favorable';
  if (avg >= 1.5) return 'En desarrollo';
  return 'Área crítica';
}

function scoreColor(avg) {
  if (avg >= 3.5) return '#16a34a';
  if (avg >= 2.5) return '#22c55e';
  if (avg >= 1.5) return '#f97316';
  return '#dc2626';
}

// ════════════════════════════════════════════════════════════
// RADAR CHART (Chart.js)
// ════════════════════════════════════════════════════════════
function buildRadarChart(canvasId, labels, data, color) {
  if (!checkCDN('chart')) return;
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  if (!window._charts) window._charts = {};
  if (window._charts[canvasId]) { window._charts[canvasId].destroy(); }
  window._charts[canvasId] = new Chart(canvas.getContext('2d'), {
    type: 'radar',
    data: {
      labels,
      datasets: [{
        data,
        borderColor: color || '#8B1538',
        backgroundColor: (color || '#8B1538') + '22',
        pointBackgroundColor: color || '#8B1538',
        pointRadius: 5, borderWidth: 2, fill: true
      }]
    },
    options: {
      scales: {
        r: {
          min: 0, max: 4,
          ticks: { stepSize: 1, font: { size: 9 }, backdropColor: 'transparent' },
          pointLabels: { font: { size: 9 }, color: '#374151' },
          grid: { color: '#e2e8f0' }
        }
      },
      plugins: { legend: { display: false } }
    }
  });
}

// ════════════════════════════════════════════════════════════
// THANK-YOU VIEW WITH RESULTS
// ════════════════════════════════════════════════════════════
function renderThankYou(userId) {
  const data   = getData();
  const user   = data.usuarios.find(u => u.id === userId);
  const resp   = data.respuestas.find(r => r.usuario_id === userId);
  const el     = document.getElementById('ty-results');
  if (!el || !user || !resp) return;

  const dimAvgs  = calcDimAvgs(resp.respuestas);
  const totalAvg = dimAvgs.reduce((a, b) => a + b, 0) / dimAvgs.length;
  const radarLbls = DIMS.map((_, i) => `D${i + 1}`);

  el.innerHTML = `
    <div class="ty-results-inner">
      <div class="ty-radar-wrap">
        <h3 style="color:var(--brand);margin-bottom:.4rem">Perfil institucional</h3>
        <p style="font-size:.78rem;color:#64748b;margin-bottom:.8rem">Promedio por dimensión (escala 1–4)</p>
        <canvas id="ty-radar" width="290" height="290"></canvas>
        <div id="ty-radar-warn" style="font-size:.78rem;color:var(--warn);margin-top:.5rem;display:none">
          ⚠ Conexión a internet requerida para mostrar la gráfica.
        </div>
      </div>
      <div class="ty-dim-table">
        <h3 style="color:var(--brand);margin-bottom:.8rem">Resultados por dimensión</h3>
        <table style="width:100%;border-collapse:collapse;font-size:.84rem">
          <thead style="background:var(--brand);color:white">
            <tr>
              <th style="padding:.48rem .75rem;text-align:left">Dimensión</th>
              <th style="padding:.48rem .75rem;text-align:center">Prom.</th>
              <th style="padding:.48rem .75rem;text-align:center">Nivel</th>
            </tr>
          </thead>
          <tbody>
            ${DIMS.map((d, i) => `
              <tr style="border-bottom:1px solid #f1f5f9">
                <td style="padding:.48rem .75rem;font-size:.8rem">D${i + 1}. ${esc(d.nombre)}</td>
                <td style="padding:.48rem .75rem;text-align:center;font-weight:700;color:${scoreColor(dimAvgs[i])}">${dimAvgs[i].toFixed(2)}</td>
                <td style="padding:.48rem .75rem;text-align:center">
                  <span style="background:${scoreColor(dimAvgs[i])}22;color:${scoreColor(dimAvgs[i])};padding:.18rem .48rem;border-radius:99px;font-size:.73rem;font-weight:600">${scoreLabel(dimAvgs[i])}</span>
                </td>
              </tr>`).join('')}
            <tr style="background:var(--brand-light)">
              <td style="padding:.55rem .75rem;font-weight:700">Promedio general</td>
              <td style="padding:.55rem .75rem;text-align:center;font-weight:800;color:var(--brand);font-size:1rem">${totalAvg.toFixed(2)}</td>
              <td style="padding:.55rem .75rem;text-align:center">
                <span style="background:${scoreColor(totalAvg)}22;color:${scoreColor(totalAvg)};padding:.18rem .48rem;border-radius:99px;font-size:.73rem;font-weight:600">${scoreLabel(totalAvg)}</span>
              </td>
            </tr>
          </tbody>
        </table>
        <div style="margin-top:1.2rem">
          <button class="btn btn-primary" style="width:auto" onclick="generateInstitutionPDF('${esc(userId)}')">
            ⬇ Descargar informe PDF
          </button>
        </div>
      </div>
    </div>`;

  setTimeout(() => {
    if (typeof Chart !== 'undefined') {
      buildRadarChart('ty-radar', radarLbls, dimAvgs, '#8B1538');
    } else {
      const w = document.getElementById('ty-radar-warn');
      if (w) w.style.display = 'block';
    }
  }, 150);
}

// ════════════════════════════════════════════════════════════
// PDF: INSTITUCIÓN
// ════════════════════════════════════════════════════════════
async function generateInstitutionPDF(userId) {
  if (!checkCDN('jspdf')) return;
  const { jsPDF } = window.jspdf;
  const doc  = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
  const data = getData();
  const user = data.usuarios.find(u => u.id === userId);
  const resp = data.respuestas.find(r => r.usuario_id === userId);
  if (!user || !resp) return;

  const CRIM    = [139, 21, 56];
  const dimAvgs = calcDimAvgs(resp.respuestas);
  const total   = dimAvgs.reduce((a, b) => a + b, 0) / dimAvgs.length;

  // ── Cabecera ──
  doc.setFillColor(...CRIM);
  doc.rect(0, 0, 210, 28, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(18); doc.setFont('helvetica', 'bold');
  doc.text('COEPES', 14, 12);
  doc.setFontSize(7.5); doc.setFont('helvetica', 'normal');
  doc.text('COMISIÓN ESTATAL PARA LA PLANEACIÓN DE LA EDUCACIÓN SUPERIOR — VERACRUZ', 14, 19);
  doc.text('Diagnóstico Estatal 2026  |  Instrumento de Evaluación', 210 - 14, 12, { align: 'right' });
  doc.setFontSize(8);
  doc.text(`Generado: ${fmtDate(new Date().toISOString())}`, 210 - 14, 20, { align: 'right' });

  // ── Título ──
  doc.setTextColor(...CRIM);
  doc.setFontSize(15); doc.setFont('helvetica', 'bold');
  doc.text('Informe de Resultados', 14, 40);

  // ── Caja info institución ──
  doc.setDrawColor(...CRIM); doc.setLineWidth(0.4);
  doc.roundedRect(14, 45, 125, 26, 2, 2, 'S');
  doc.setTextColor(0); doc.setFontSize(9);
  [[`Institución:`, user.institucion], [`Representante:`, user.nombre], [`Fecha:`, fmtDate(resp.fecha_respuesta)]]
    .forEach(([lbl, val], i) => {
      doc.setFont('helvetica', 'bold');  doc.text(lbl, 19, 54 + i * 7);
      doc.setFont('helvetica', 'normal'); doc.text(String(val), 50, 54 + i * 7);
    });

  // ── Badge promedio ──
  doc.setFillColor(...CRIM);
  doc.roundedRect(145, 45, 51, 26, 2, 2, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(8.5); doc.setFont('helvetica', 'normal');
  doc.text('Promedio general', 170.5, 53, { align: 'center' });
  doc.setFontSize(22); doc.setFont('helvetica', 'bold');
  doc.text(total.toFixed(2), 170.5, 64, { align: 'center' });
  doc.setFontSize(8); doc.setFont('helvetica', 'normal');
  doc.text('de 4.00', 170.5, 70, { align: 'center' });

  // ── Radar del canvas ──
  const radarCanvas = document.getElementById('ty-radar');
  if (radarCanvas) {
    try { doc.addImage(radarCanvas.toDataURL('image/png'), 'PNG', 50, 78, 110, 110); } catch (_) {}
  }

  // ── Tabla promedios por dimensión ──
  doc.setTextColor(...CRIM);
  doc.setFontSize(11); doc.setFont('helvetica', 'bold');
  doc.text('Resultados por Dimensión', 14, 198);
  doc.autoTable({
    startY: 202,
    head: [['Dim.', 'Nombre de la dimensión', 'Promedio', 'Nivel']],
    body: DIMS.map((d, i) => [`D${i + 1}`, d.nombre, dimAvgs[i].toFixed(2), scoreLabel(dimAvgs[i])]),
    headStyles: { fillColor: CRIM, textColor: [255, 255, 255], fontStyle: 'bold', fontSize: 8.5 },
    bodyStyles: { fontSize: 8.5 },
    columnStyles: { 0: { cellWidth: 12, halign: 'center' }, 1: { cellWidth: 108 }, 2: { cellWidth: 22, halign: 'center', fontStyle: 'bold' }, 3: { cellWidth: 36, halign: 'center' } },
    alternateRowStyles: { fillColor: [253, 242, 246] },
    margin: { left: 14, right: 14 }
  });

  // ── Página 2: Respuestas detalladas ──
  doc.addPage();
  doc.setFillColor(...CRIM); doc.rect(0, 0, 210, 14, 'F');
  doc.setTextColor(255, 255, 255); doc.setFontSize(9); doc.setFont('helvetica', 'bold');
  doc.text(`COEPES Veracruz 2026  |  ${user.institucion}`, 14, 9);
  doc.setTextColor(...CRIM); doc.setFontSize(12); doc.setFont('helvetica', 'bold');
  doc.text('Respuestas detalladas por reactivo', 14, 23);

  let gn = 1;
  const tBody = [];
  DIMS.forEach((d, di) => {
    d.items.forEach(txt => {
      const val = Number(resp.respuestas[String(gn)]);
      tBody.push([`D${di + 1}`, String(gn), txt, ESCALA.find(e => e.v === val)?.lbl || '—']);
      gn++;
    });
  });
  doc.autoTable({
    startY: 27,
    head: [['Dim.', 'N°', 'Reactivo', 'Respuesta']],
    body: tBody,
    headStyles: { fillColor: CRIM, textColor: [255, 255, 255], fontStyle: 'bold', fontSize: 8 },
    bodyStyles: { fontSize: 7.5 },
    columnStyles: { 0: { cellWidth: 10, halign: 'center' }, 1: { cellWidth: 8, halign: 'center' }, 2: { cellWidth: 122 }, 3: { cellWidth: 46 } },
    alternateRowStyles: { fillColor: [253, 242, 246] },
    margin: { left: 14, right: 14 },
    didParseCell(d) {
      if (d.column.index === 3 && d.section === 'body') {
        const v = d.cell.raw;
        d.cell.styles.textColor = (v === 'De acuerdo' || v === 'Totalmente de acuerdo') ? [22, 163, 74] : [220, 38, 38];
      }
    }
  });

  pdfSignature(doc, user.nombre, user.institucion, CRIM);
  doc.save(`Informe_${user.institucion.replace(/\W+/g, '_')}_COEPES2026.pdf`);
}

// ════════════════════════════════════════════════════════════
// PDF: ADMIN GENERAL
// ════════════════════════════════════════════════════════════
async function generateAdminPDF() {
  if (!checkCDN('jspdf')) return;
  const { jsPDF } = window.jspdf;
  const doc  = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
  const data = getData();
  const CRIM = [139, 21, 56];
  const users     = data.usuarios.filter(u => !u.es_admin);
  const responded = users.filter(u => u.respondido);

  // ── Portada ──
  doc.setFillColor(...CRIM); doc.rect(0, 0, 210, 297, 'F');
  doc.setDrawColor(255, 255, 255); doc.setLineWidth(0.5);
  doc.line(30, 110, 180, 110); doc.line(30, 188, 180, 188);
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(36); doc.setFont('helvetica', 'bold');
  doc.text('COEPES', 105, 96, { align: 'center' });
  doc.setFontSize(10); doc.setFont('helvetica', 'normal');
  doc.text('COMISIÓN ESTATAL PARA LA PLANEACIÓN', 105, 122, { align: 'center' });
  doc.text('DE LA EDUCACIÓN SUPERIOR DE VERACRUZ', 105, 130, { align: 'center' });
  doc.setFontSize(20); doc.setFont('helvetica', 'bold');
  doc.text('Diagnóstico Estatal 2026', 105, 155, { align: 'center' });
  doc.setFontSize(13); doc.setFont('helvetica', 'normal');
  doc.text('Informe General de Resultados', 105, 166, { align: 'center' });
  doc.setFontSize(10);
  doc.text(`Instituciones participantes: ${responded.length} de ${users.length} registradas`, 105, 198, { align: 'center' });
  doc.text(`Generado: ${fmtDate(new Date().toISOString())}`, 105, 207, { align: 'center' });

  // ── Ranking ──
  const rankRows = responded.map(u => {
    const r = data.respuestas.find(x => x.usuario_id === u.id); if (!r) return null;
    const avgs = calcDimAvgs(r.respuestas);
    return { institucion: u.institucion, nombre: u.nombre, avgs, total: avgs.reduce((a, b) => a + b, 0) / avgs.length };
  }).filter(Boolean).sort((a, b) => b.total - a.total);

  doc.addPage();
  doc.setFillColor(...CRIM); doc.rect(0, 0, 210, 14, 'F');
  doc.setTextColor(255, 255, 255); doc.setFontSize(9); doc.setFont('helvetica', 'bold');
  doc.text('COEPES Veracruz 2026 — Diagnóstico Estatal — Informe General', 14, 9);
  doc.setTextColor(...CRIM); doc.setFontSize(13); doc.setFont('helvetica', 'bold');
  doc.text('Ranking comparativo por institución', 14, 23);

  doc.autoTable({
    startY: 27,
    head: [['Institución', ...DIMS.map((_, i) => `D${i + 1}`), 'Total', 'Nivel']],
    body: rankRows.map(r => [r.institucion, ...r.avgs.map(a => a.toFixed(2)), r.total.toFixed(2), scoreLabel(r.total)]),
    headStyles: { fillColor: CRIM, textColor: [255, 255, 255], fontStyle: 'bold', fontSize: 7.5 },
    bodyStyles: { fontSize: 7.5 },
    columnStyles: {
      0: { cellWidth: 52 },
      ...Object.fromEntries(DIMS.map((_, i) => [i + 1, { cellWidth: 12, halign: 'center' }])),
      [DIMS.length + 1]: { cellWidth: 14, halign: 'center', fontStyle: 'bold' },
      [DIMS.length + 2]: { cellWidth: 30, halign: 'center' }
    },
    alternateRowStyles: { fillColor: [253, 242, 246] },
    margin: { left: 14, right: 14 }
  });

  // ── Promedios globales ──
  if (responded.length > 0) {
    doc.addPage();
    doc.setFillColor(...CRIM); doc.rect(0, 0, 210, 14, 'F');
    doc.setTextColor(255, 255, 255); doc.setFontSize(9); doc.setFont('helvetica', 'bold');
    doc.text('COEPES Veracruz 2026 — Diagnóstico Estatal — Informe General', 14, 9);
    doc.setTextColor(...CRIM); doc.setFontSize(13); doc.setFont('helvetica', 'bold');
    doc.text('Promedios globales por dimensión', 14, 23);

    const allAvgs  = rankRows.map(r => r.avgs);
    const globalAv = DIMS.map((_, di) => { const v = allAvgs.map(a => a[di]); return v.reduce((a, b) => a + b, 0) / v.length; });

    doc.autoTable({
    startY: 27,
    head: [['Dim.', 'Nombre de la dimensión', 'Promedio global', 'Nivel']],
    body: DIMS.map((d, i) => [`D${i + 1}`, d.nombre, globalAv[i].toFixed(2), scoreLabel(globalAv[i])]),
    headStyles: { fillColor: CRIM, textColor: [255, 255, 255], fontStyle: 'bold', fontSize: 9 },
    bodyStyles: { fontSize: 9 },
    columnStyles: { 0: { cellWidth: 14, halign: 'center' }, 1: { cellWidth: 108 }, 2: { cellWidth: 26, halign: 'center', fontStyle: 'bold' }, 3: { cellWidth: 36, halign: 'center' } },
    alternateRowStyles: { fillColor: [253, 242, 246] },
    margin: { left: 14, right: 14 }
  });
  }

  pdfSignature(doc, 'COEPES Veracruz', 'Diagnóstico Estatal 2026', CRIM);
  doc.save(`Informe_General_COEPES2026_${new Date().toISOString().slice(0, 10)}.pdf`);
}

// ════════════════════════════════════════════════════════════
// COMPARATIVO (tabla ranking + radar grupal)
// ════════════════════════════════════════════════════════════
const COMP_COLORS = [
  '#8B1538', '#1E40AF', '#065F46', '#92400E', '#4C1D95',
  '#7C3AED', '#0369A1', '#0F766E', '#B45309', '#BE123C'
];
let _compSortCol = -1, _compSortAsc = false;
let _compSelected = null; // null = se inicializa con todas al primer render

function sortComp(col) {
  if (_compSortCol === col) _compSortAsc = !_compSortAsc;
  else { _compSortCol = col; _compSortAsc = false; }
  renderComparative();
}

function renderComparative() {
  const data      = getData();
  const responded = data.usuarios.filter(u => !u.es_admin && u.respondido);
  const el        = document.getElementById('comp-content');
  if (responded.length === 0) {
    el.innerHTML = '<p style="color:#64748b;text-align:center;padding:3rem">Sin respuestas registradas aún.</p>';
    return;
  }

  const allRows = responded.map(u => {
    const r = data.respuestas.find(x => x.usuario_id === u.id); if (!r) return null;
    const avgs  = calcDimAvgs(r.respuestas);
    const total = avgs.reduce((a, b) => a + b, 0) / avgs.length;
    return { id: u.id, institucion: u.institucion, nombre: u.nombre, avgs, total };
  }).filter(Boolean);

  if (_compSelected === null) _compSelected = new Set(allRows.map(r => r.id));

  // Mapa de color consistente por posición en allRows
  const colorMap = {};
  allRows.forEach((r, i) => { colorMap[r.id] = COMP_COLORS[i % COMP_COLORS.length]; });

  let rows = allRows.filter(r => _compSelected.has(r.id));
  if (_compSortCol === -1 || _compSortCol === DIMS.length)
    rows.sort((a, b) => _compSortAsc ? a.total - b.total : b.total - a.total);
  else
    rows.sort((a, b) => _compSortAsc ? a.avgs[_compSortCol] - b.avgs[_compSortCol] : b.avgs[_compSortCol] - a.avgs[_compSortCol]);

  const ths = DIMS.map((d, i) => {
    const arr = _compSortCol === i ? (_compSortAsc ? ' ▲' : ' ▼') : '';
    return `<th class="sortable-th" title="${esc(d.nombre)}" style="padding:.62rem .55rem;text-align:center" onclick="sortComp(${i})">D${i + 1}${arr}</th>`;
  }).join('');
  const totArrow = _compSortCol === DIMS.length ? (_compSortAsc ? ' ▲' : ' ▼') : '';

  el.innerHTML = `
    <div class="comp-filter-panel">
      <div class="comp-filter-header">
        <span>Instituciones en comparativa
          <span style="font-weight:400;color:#64748b">(${_compSelected.size} de ${allRows.length})</span>
        </span>
        <div style="display:flex;gap:.4rem">
          <button class="btn btn-secondary btn-sm" onclick="selectAllComp()">Todas</button>
          <button class="btn btn-secondary btn-sm" onclick="deselectAllComp()">Ninguna</button>
        </div>
      </div>
      <div class="comp-filter-list">
        ${allRows.map(r => `
          <div class="comp-inst-chk ${_compSelected.has(r.id) ? 'chk-on' : ''}" onclick="toggleCompInst('${esc(r.id)}')">
            <span class="comp-inst-dot" style="background:${colorMap[r.id]}"></span>
            <span>${esc(r.institucion)}</span>
            ${_compSelected.has(r.id) ? '<span class="chk-mark">✓</span>' : ''}
          </div>`).join('')}
      </div>
    </div>

    ${rows.length >= 2 ? `
    <div class="comp-chart-card">
      <h4 style="color:var(--brand);margin-bottom:.25rem">Radar comparativo por dimensión</h4>
      <p style="font-size:.78rem;color:#64748b;margin-bottom:1rem">${rows.length} instituciones · Escala 1–4</p>
      <div style="max-width:520px;margin:0 auto"><canvas id="comp-radar" width="520" height="520"></canvas></div>
    </div>` : `
    <p style="text-align:center;color:#94a3b8;padding:1.5rem 0;font-size:.88rem">
      ${rows.length === 1 ? 'Selecciona al menos 2 instituciones para visualizar el radar comparativo.' : 'Selecciona al menos 2 instituciones para ver la comparativa.'}
    </p>`}

    ${rows.length > 0 ? `
    <div style="display:flex;justify-content:space-between;align-items:center;margin:1rem 0 .6rem;flex-wrap:wrap;gap:.5rem">
      <h3 style="color:var(--brand)">Tabla comparativa</h3>
      <button class="btn btn-success btn-sm" style="width:auto" onclick="generateAdminPDF()">⬇ Informe general PDF</button>
    </div>
    <p style="font-size:.8rem;color:#64748b;margin-bottom:.8rem">Clic en encabezado para ordenar · D1–D7 = dimensiones · Escala 1–4</p>
    <div class="table-box" style="overflow-x:auto;margin-bottom:1.5rem">
      <table style="width:100%;border-collapse:collapse;font-size:.82rem;min-width:680px">
        <thead style="background:var(--brand);color:white">
          <tr>
            <th style="padding:.62rem 1rem;text-align:left">Institución</th>
            ${ths}
            <th class="sortable-th" style="padding:.62rem .55rem;text-align:center" onclick="sortComp(${DIMS.length})">Total${totArrow}</th>
            <th style="padding:.62rem .7rem">Nivel</th>
          </tr>
        </thead>
        <tbody>
          ${rows.map((r, idx) => `
            <tr style="${idx % 2 === 1 ? 'background:var(--brand-light)' : ''}">
              <td style="padding:.5rem 1rem">
                <span class="comp-inst-dot" style="display:inline-block;vertical-align:middle;margin-right:.4rem;background:${colorMap[r.id]}"></span>
                <span style="font-weight:600;font-size:.84rem">${esc(r.institucion)}</span>
                <div style="font-size:.73rem;color:#64748b;padding-left:1.3rem">${esc(r.nombre)}</div>
              </td>
              ${r.avgs.map(a => `<td style="padding:.5rem .55rem;text-align:center;font-weight:600;color:${scoreColor(a)}">${a.toFixed(2)}</td>`).join('')}
              <td style="padding:.5rem .55rem;text-align:center;font-weight:800;font-size:.95rem;color:${scoreColor(r.total)}">${r.total.toFixed(2)}</td>
              <td style="padding:.5rem .7rem"><span style="background:${scoreColor(r.total)}22;color:${scoreColor(r.total)};padding:.18rem .48rem;border-radius:99px;font-size:.72rem;font-weight:600;white-space:nowrap">${scoreLabel(r.total)}</span></td>
            </tr>`).join('')}
        </tbody>
      </table>
    </div>` : ''}`;

  if (rows.length >= 2) {
    setTimeout(() => {
      if (typeof Chart === 'undefined') return;
      buildCompRadarChart('comp-radar', rows, colorMap);
    }, 150);
  }
}

function toggleCompInst(id) {
  if (_compSelected.has(id)) _compSelected.delete(id);
  else _compSelected.add(id);
  renderComparative();
}

function selectAllComp() {
  _compSelected = new Set(getData().usuarios.filter(u => !u.es_admin && u.respondido).map(u => u.id));
  renderComparative();
}

function deselectAllComp() {
  _compSelected = new Set();
  renderComparative();
}

function buildCompRadarChart(canvasId, rows, colorMap) {
  if (!checkCDN('chart')) return;
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  if (!window._charts) window._charts = {};
  if (window._charts[canvasId]) window._charts[canvasId].destroy();
  const labels = DIMS.map((_, i) => `D${i + 1}`);
  window._charts[canvasId] = new Chart(canvas.getContext('2d'), {
    type: 'radar',
    data: {
      labels,
      datasets: rows.map(r => ({
        label: r.institucion,
        data: r.avgs,
        borderColor: colorMap[r.id],
        backgroundColor: colorMap[r.id] + '18',
        pointBackgroundColor: colorMap[r.id],
        pointRadius: 4,
        borderWidth: 2,
        fill: true
      }))
    },
    options: {
      scales: {
        r: {
          min: 0, max: 4,
          ticks: { stepSize: 1, font: { size: 9 }, backdropColor: 'transparent' },
          pointLabels: { font: { size: 10 }, color: '#374151' },
          grid: { color: '#e2e8f0' }
        }
      },
      plugins: {
        legend: {
          display: true,
          position: 'bottom',
          labels: { font: { size: 9 }, boxWidth: 12, padding: 8, color: '#374151' }
        }
      }
    }
  });
}

// ════════════════════════════════════════════════════════════
// FIRMA PDF
// ════════════════════════════════════════════════════════════
function pdfSignature(doc, signerName, signerOrg, CRIM) {
  const endY  = (doc.lastAutoTable && doc.lastAutoTable.finalY) || 200;
  let   baseY = endY + 24;
  if (baseY > 268) { doc.addPage(); baseY = 240; }
  doc.setDrawColor(...CRIM); doc.setLineWidth(0.35);
  doc.line(62, baseY, 148, baseY);
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(9.5); doc.setFont('helvetica', 'bold');
  doc.text(signerName, 105, baseY + 7,  { align: 'center' });
  doc.setFont('helvetica', 'normal');
  doc.text(signerOrg,  105, baseY + 14, { align: 'center' });
  doc.setFontSize(7); doc.setTextColor(150, 150, 150);
  doc.text(
    'COEPES Veracruz — Primera Reunión del Comité de Mejora Continua Integral de la Educación Superior 2026',
    105, 291, { align: 'center' }
  );
}

// ════════════════════════════════════════════════════════════
// DATOS DE DEMOSTRACIÓN (10 instituciones ficticias)
// ════════════════════════════════════════════════════════════
async function seedDemoData() {
  const data = getData();
  if (data.usuarios.some(u => !u.es_admin)) return;   // ya hay instituciones

  const pwHash = await sha256('Demo2026*');
  const demo = [
    { inst: 'Universidad Veracruzana',         nombre: 'Dra. Carmen López Herrera'   },
    { inst: 'IT de Veracruz',                  nombre: 'Mtro. Roberto Sánchez Pérez' },
    { inst: 'Universidad Cristóbal Colón',      nombre: 'Dr. Ernesto Ramírez García'  },
    { inst: 'ITS de Coatzacoalcos',            nombre: 'Mtra. Ana González Díaz'     },
    { inst: 'Universidad de Xalapa',           nombre: 'Dr. Luis Martínez Torres'    },
    { inst: 'IT de Orizaba',                   nombre: 'Mtra. Patricia Flores Luna'  },
    { inst: 'CESVER Plantel Xalapa',           nombre: 'Mtro. Alejandro Cruz Vidal'  },
    { inst: 'Universidad Anáhuac Xalapa',       nombre: 'Dra. María Suárez Morales'   },
    { inst: 'IT de Poza Rica',                 nombre: 'Dr. José Hernández Mejía'    },
    { inst: 'UPA Veracruz',                    nombre: 'Mtra. Laura Reyes Castillo'  }
  ];

  // 36 respuestas por patrón: D1(5) D2(5) D3(5) D4(5) D5(6) D6(5) D7(5)
  const patterns = [
    [4,4,4,3,4, 4,3,4,4,4, 3,4,4,3,3, 4,4,4,4,3, 3,4,3,4,4,3, 4,4,3,4,4, 4,4,3,4,4],  // ~3.7
    [3,3,4,3,3, 3,4,3,3,4, 3,3,4,3,3, 3,3,3,4,3, 3,3,4,3,3,3, 3,4,3,3,4, 3,3,4,3,3],  // ~3.3
    [4,4,4,4,4, 4,4,4,4,4, 4,4,4,4,4, 4,4,4,4,4, 4,4,4,4,4,4, 4,4,4,4,4, 4,4,4,4,4],  // 4.0
    [2,3,2,2,3, 2,3,3,2,3, 2,2,3,2,2, 2,3,2,3,2, 2,3,2,2,3,2, 2,3,2,2,3, 2,3,2,2,3],  // ~2.4
    [3,4,3,4,3, 4,3,4,3,4, 3,4,3,4,3, 3,4,3,4,3, 3,4,3,3,4,3, 4,3,4,3,4, 3,4,3,4,3],  // ~3.5
    [1,2,1,2,1, 2,1,2,1,2, 1,2,1,2,1, 2,1,2,1,2, 1,2,1,2,1,1, 2,1,2,1,2, 1,2,1,2,1],  // ~1.5
    [4,3,4,4,3, 4,4,3,4,4, 4,3,4,3,4, 4,4,3,4,4, 3,4,4,4,3,3, 3,4,4,3,4, 4,3,4,4,3],  // ~3.7
    [3,3,3,3,3, 3,3,3,3,3, 3,3,3,3,3, 3,3,3,3,3, 3,3,3,3,3,3, 3,3,3,3,3, 3,3,3,3,3],  // 3.0
    [2,3,3,2,3, 3,2,3,2,3, 3,2,3,3,2, 3,3,2,3,3, 2,3,2,3,3,2, 3,3,2,3,3, 2,3,3,2,3],  // ~2.7
    [4,4,3,4,4, 4,3,4,4,3, 4,4,3,4,4, 4,3,4,4,4, 4,4,3,4,4,4, 4,3,4,4,4, 4,4,3,4,4]   // ~3.8
  ];

  demo.forEach((d, i) => {
    const uid = uuid();
    const reg = new Date(2026, 4, 18, 8 + i, (i * 5) % 60).toISOString();
    const res = new Date(2026, 4, 18, 8 + i, (i * 5 + 28) % 60).toISOString();
    data.usuarios.push({
      id: uid, nombre: d.nombre, institucion: d.inst,
      password_hash: pwHash, respondido: true, es_admin: false, fecha_registro: reg
    });
    const respObj = {};
    patterns[i].forEach((v, j) => { respObj[String(j + 1)] = v; });
    data.respuestas.push({ usuario_id: uid, fecha_respuesta: res, respuestas: respObj });
  });
  saveData(data);
}

// ════════════════════════════════════════════════════════════
// START
// ════════════════════════════════════════════════════════════
init();
