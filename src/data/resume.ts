/**
 * /resume 페이지에 표시할 경력·포트폴리오 데이터.
 * 공개 페이지이므로 연락처(전화·주소)·연봉·자기소개서 등 개인 정보는 담지 않는다.
 */

export type Career = {
  company: string;
  team: string;
  period: string;
  summary: string;
  highlights: string[];
  tech: string[];
};

export type Project = {
  title: string;
  period: string;
  role: string;
  summary: string;
  bullets: string[];
  tech: string[];
  links?: { label: string; url: string }[];
  award?: string;
};

export type SkillGroup = {
  label: string;
  items: string[];
};

export type Education = {
  title: string;
  org: string;
  period: string;
  note?: string;
};

export const intro = {
  headline: "부트로더부터 녹화 파이프라인까지, 차량용 카메라 펌웨어를 만듭니다.",
  paragraphs: [
    "Embedded Linux BSP와 Unity 애플리케이션 개발을 모두 경험한 임베디드 Linux 개발자입니다. 저수준 시스템부터 사용자 애플리케이션까지 소프트웨어 전체가 어떻게 맞물려 도는지 이해하는 것을 중요하게 생각합니다.",
    "현재는 앤씨앤(주) Framework팀에서 Novatek NT98530 SoC 기반 차량용 블랙박스 BSP를 개발하고 있습니다. U-Boot와 드라이버, 센서 브링업부터 비디오 파이프라인 설계와 ISP 튜닝, 녹화 성능 최적화까지 보드 위의 소프트웨어 전 구간을 맡고 있으며, 요즘은 Claude를 빌드 · 검증 루프에 연동해 반복 검증을 자동화하고 있습니다.",
  ],
};

export const currentWork = {
  title: "지금 하고 있는 일",
  period: "2025.05 ~ 현재 · 앤씨앤(주) Framework팀",
  items: [
    {
      title: "3채널 블랙박스 플랫폼 개발 · 운영",
      detail:
        "NT98530 기반 4K + QHD + FHD 3채널 video pipeline 구성과 모델별 설정 적용. Vueroid S1-4K 모델 출시 사이클을 처음부터 끝까지 경험.",
    },
    {
      title: "부팅 · 녹화 안정성",
      detail:
        "Fastboot 녹화 파이프라인 안정화, 4K frame drop 최적화, Hybrid rootfs로 부팅(녹화 시작) 시간 14.5초 → 12초 단축, 저전력 주차 모드 웨이크업 이슈 분석.",
    },
    {
      title: "진단 · 크래시 로그 체계",
      detail:
        "ramoops 기반 커널 패닉·워치독 재부팅 로그 보존, sysfs 진단 노드 추가, USB 진단 콘솔 설계로 UART 없는 필드 장비의 원인 분석을 가능하게 함.",
    },
    {
      title: "AI 연동 개발 환경 자동화",
      detail:
        "Claude Code와 연동해 FW 빌드 → SD 굽기 → 부팅 확인 → 로그 판정을 무인 회귀로 돌리는 환경 구축 중. AI 기반 frame 깨짐 자동 검출 툴 개발.",
    },
    {
      title: "신규 센서 · 모듈 검토",
      detail:
        "신규 이미지 센서 모드 및 24GHz 레이더 모듈 도입 검토, 사내 평가 앱 개발, 카메라 디코더(AHD / SerDes) bring-up.",
    },
  ],
};

export const careers: Career[] = [
  {
    company: "앤씨앤(주)",
    team: "Framework팀 · 주임",
    period: "2025.05 ~ 현재",
    summary: "차량용 블랙박스 · 영상기록장치 솔루션 기업. Novatek SoC 기반 BSP 개발 담당.",
    highlights: [
      "NT98530 SoC BSP bring-up 및 모델별 설정 적용, U-Boot / Fastboot / rootfs / RTOS built-in recording flow 내재화",
      "4K + QHD + FHD 3채널 video pipeline 구성 및 최적화, Sensor / AHD / SerDes bring-up과 I2C · GPIO 기반 외부 영상 칩셋 제어",
      "Hybrid rootfs 적용으로 부팅(앱 녹화 시작) 시간 14.5초 → 12초 단축",
      "수동 확인에 의존하던 frame 깨짐 검증을 AI 기반 자동 검출로 전환, ISP 튜닝 툴 개발",
      "국책과제 'UHD급 4채널 영상 신호처리 반도체 검증 플랫폼' 3년차: 4K 4ch 수신 · HDMI 출력 캐리어 보드 bring-up, 시연 데모 성공",
    ],
    tech: ["NT98530", "ARM64 Linux", "RTOS", "U-Boot", "Device Tree", "AHD / SerDes", "ISP", "CSI2-TX / HDMI"],
  },
  {
    company: "(주)웅진씽크빅",
    team: "MetaX팀 · 연구원 (인턴 → 정규)",
    period: "2022.09 ~ 2024.06",
    summary: "Unity / C# 클라이언트 개발. 메타버스 교육 콘텐츠와 신규 영어 학습 제품.",
    highlights: [
      "신규 영어 학습 제품 '링고시티': Voca2 형용사 퀘스트 시스템 단독 개발, CSV 기반 퀘스트 데이터 구조 설계",
      "UI Bind 시스템 설계 · 구현으로 UI 개발 및 유지보수 효율 개선",
      "스마트올 메타버스: 신규 씬 · 펫 시스템 · GPT 기반 NPC 연동 개발, 신규 펫 업데이트 이후 DAU 약 100% 증가",
      "에셋 번들 기반 다운로드 구조 설계로 앱 용량 약 900MB → 500MB 최적화",
    ],
    tech: ["Unity", "C#", "AssetBundle", "GPT API"],
  },
  {
    company: "삼성전자",
    team: "무선사업부 APS개발그룹 · 인턴",
    period: "2021.07 ~ 2021.08",
    summary: "무선충전기 내부 회로 분석 및 WPC(Qi) 프로토콜 · 발열 분석.",
    highlights: [
      "Power-Z · 프로토콜 스니퍼로 Ping → Identification → Power Transfer 단계별 패킷 분석",
      "FAN 유무별 충전 프로파일 · 최고온도 측정, 성능과 발열의 trade-off 기반 소비자 선택형 충전기 제안",
    ],
    tech: ["WPC (Qi)", "회로 분석", "Pspice"],
  },
];

export const projects: Project[] = [
  {
    title: "On-Device 기반 차량용 비서 시스템",
    period: "2024.11 ~ 2024.12 · 6주",
    role: "5인 팀 · 팀장 · STT / VAD / 미디어 플레이어 / Git 관리",
    summary:
      "클라우드 의존 없이 On-Device 음성인식으로 차량을 제어하고, 주변 상황을 인지해 내부 환경을 최적화하는 시스템.",
    bullets: [
      "Topst D3 3대(A72 / A53 / R5)를 Ethernet으로 연결, 보드 내부는 mailbox IPC로 통신",
      "Whisper → Vosk 전환으로 정확도 · 처리시간 trade-off 해결, 명령어 가중치 리스트로 2초 이내 실시간 인식",
      "사람 음성 주파수 측정 후 bandpass filter 적용으로 VAD 오인식 감소",
      "쉘 스크립트로 A72 통합 이미지 + R5 펌웨어 Yocto 빌드 자동화",
    ],
    tech: ["Yocto", "FreeRTOS", "Vosk", "IPC", "TCP/IP", "pthread"],
    award: "최우수 프로젝트상 · 텔레칩스 × 한국전파진흥협회",
    links: [
      { label: "GitHub", url: "https://github.com/dltjrgud815/hellochips_project" },
      { label: "YouTube", url: "https://youtu.be/dzbRAB4JYJA" },
    ],
  },
  {
    title: "USB Device Driver 심화 & 성능 · 신뢰성 테스트",
    period: "2024 · 개인 프로젝트",
    role: "1인 · 분석 / 벤치마크 / 커널 디버깅",
    summary: "Linux USB 서브시스템과 드라이버를 바닥부터 분석하고 장비 성능 · 신뢰성을 직접 측정 · 튜닝.",
    bullets: [
      "USB 프로토콜(Descriptor · Enumeration)과 커널 Host Controller Driver · URB/TRB · IRQ · DMA 동작 분석",
      "블록 레이어 max_sectors_kb 4 → 256 튜닝으로 READ 2.3 → 24.3 MB/s, WRITE 2.4 → 25.8 MB/s (약 10배)",
      "UMS vs UAS 처리량 비교, printk · dmesg · dump_stack으로 커널 패닉 콜스택 추적",
    ],
    tech: ["Embedded Linux", "xHCI / DWC3", "fio", "ftrace"],
  },
  {
    title: "자동 2D 지도 생성 캐리어 (ROS · SLAM)",
    period: "2021.03 ~ 2021.06 · 졸업 프로젝트",
    role: "3인 · 팀장 · ROS / 라이다 센싱 / 캐리어 설계",
    summary: "화재 현장처럼 사람이 진입하기 힘든 공간을 원격으로 실내 2D 지도화.",
    bullets: ["라즈베리파이 4B + Arduino Uno + YDLidar X4 구성, ROS 기반 SLAM 적용"],
    tech: ["ROS", "SLAM", "Raspberry Pi", "Arduino"],
    links: [{ label: "YouTube", url: "https://youtu.be/3L67ckj_-_U" }],
  },
  {
    title: "위험물 운반 로봇 Arm",
    period: "2020.05 ~ 2020.06 · 학부 프로젝트",
    role: "1인 · HW 회로 설계 + SW 서보 4축 제어",
    summary: "손동작과 동일하게 움직이는 로봇팔 원격 제어로 위험물 취급 사고 예방.",
    bullets: [
      "Arduino I2C 라이브러리를 역분석해 AVR TWI 직접 구현, MPU6050 데이터시트 기반 드라이버 작성",
      "상보필터(자이로 90 / 가속도 10)로 pitch · yaw 제어",
    ],
    tech: ["Atmega128", "AVR C", "MPU6050", "Pspice"],
    links: [{ label: "GitHub", url: "https://github.com/dltjrgud815/AVR_RobotArm" }],
  },
];

export const skills: SkillGroup[] = [
  { label: "플랫폼", items: ["Novatek NT98530", "ARM64 Linux", "RTOS / FreeRTOS", "Yocto", "Atmega128 (AVR)"] },
  { label: "BSP", items: ["U-Boot", "Linux Kernel", "Device Tree", "rootfs / SquashFS", "Fastboot", "Firmware Update"] },
  { label: "영상 · 센서", items: ["ISP", "AHD / SerDes", "MIPI CSI-2", "HDMI", "Video Encoder (H.26x)", "UVC"] },
  { label: "언어 · 도구", items: ["C / C++", "C#", "Shell", "Git", "Docker / WSL", "Neovim", "Claude Code"] },
  { label: "이전 경험", items: ["Unity", "ROS", "회로 설계 (Pspice)"] },
];

export const educations: Education[] = [
  {
    title: "RAPA × 텔레칩스 차량용 반도체 임베디드 스쿨 1기 수료",
    org: "한국전파진흥협회 · 텔레칩스",
    period: "2024.06 ~ 2024.12",
    note: "최우수 프로젝트상 수상 (On-Device 기반 차량용 비서 시스템)",
  },
  {
    title: "고려대학교 세종캠퍼스 제어계측공학과 졸업",
    org: "학사",
    period: "2015.03 ~ 2022.02",
    note: "졸업 작품: 자동 2D 지도 생성 캐리어",
  },
  {
    title: "OPIc Intermediate High",
    org: "영어",
    period: "2025.03",
  },
];
