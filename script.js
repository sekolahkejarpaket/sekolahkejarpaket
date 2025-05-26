
const users = [
  { username: 'admin1', password: 'admin123', role: 'admin' },
  { username: 'tutor1', password: 'tutor123', role: 'tutor' },
  { username: 'peserta1', password: 'peserta123', role: 'peserta' }
];

const menus = {
  admin: [
    'Profil', 'Guru', 'Peserta/Siswa', 'Mata Pelajaran',
    'Absen Peserta/Siswa', 'Jadwal', 'Materi', 'Tugas', 'Ruang Ujian'
  ],
  tutor: [
    'Profil', 'Daftar Peserta', 'Absen Peserta/Siswa',
    'Jadwal', 'Beri Materi', 'Beri Tugas', 'Beri Ujian'
  ],
  peserta: [
    'Profil', 'Jadwal', 'Materi', 'Tugas', 'Ruang Ujian'
  ]
};

function login() {
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  const role = document.getElementById('role').value;

  if (!username || !password || !role) {
    alert('Mohon isi semua field dan pilih role!');
    return;
  }

  const user = users.find(u => u.username === username && u.password === password && u.role === role);
  if (!user) {
    alert('Login gagal! Username, password, atau role salah.');
    return;
  }

  // Sukses login
  document.getElementById('login-area').classList.add('hidden');
  document.getElementById('dashboard').classList.remove('hidden');

  document.getElementById('dashboard-title').textContent = `Dashboard ${role.charAt(0).toUpperCase() + role.slice(1)}`;

  const menuList = document.getElementById('menu-list');
  menuList.innerHTML = '';
  menus[role].forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    menuList.appendChild(li);
  });
}

function logout() {
  document.getElementById('login-area').classList.remove('hidden');
  document.getElementById('dashboard').classList.add('hidden');
  document.getElementById('username').value = '';
  document.getElementById('password').value = '';
  document.getElementById('role').value = '';
  document.getElementById('menu-list').innerHTML = '';
}
