// Add this to your pillarData array (in ../data/pillarData.js), same
// pattern as digitalMarketingPillar.

import { CircuitBoard } from 'lucide-react';

// #2A585F is a darker tint of the brand teal (#3B7B84) — same hue
// family as the logo's teal band, kept distinct from Digital
// Engineering's card so the two don't read as the same pillar.
export const iotPillar = {
  id: 'iot-services',
  category: 'IoT & Embedded Systems',
  title: 'IoT & Embedded Systems',
  color: '#2A585F',
  icon: CircuitBoard,
  gradient: 'from-[#2A585F] to-[#3B7B84]',
  heroGrid: true,

  // Short line used on the Services overview cards
  description:
    'Connected hardware and embedded intelligence — from sensor to cloud, engineered for real-time monitoring and industrial-grade reliability.',

  // Shown in the black "Ecosystem" panel
  longDesc:
    'We build the full stack between a physical sensor and a business decision: firmware that runs reliably on constrained hardware, connectivity that survives real-world networks, and cloud pipelines that turn raw telemetry into dashboards and alerts people actually act on. Whether it\'s a single connected product or a fleet of industrial sensors, the system is designed to keep working unattended, report honestly when it can\'t, and scale without a rewrite.',

  // Chips in the Ecosystem panel
  tech: [
    'ESP32 / STM32',
    'MQTT',
    'LoRaWAN',
    'AWS IoT Core',
    'Azure IoT Hub',
    'Zigbee / BLE',
    'Node-RED',
    'Grafana'
  ],

  // Used on the Services overview page card
  items: [
    'Embedded & Firmware',
    'Sensor Integration',
    'Device Connectivity',
    'Real-Time Dashboards'
  ],

  caseStudy: {
    name: 'a recent industrial IoT deployment',
    link: '/portfolio'
  },

  // Feeds "Core Competencies" on the detail page — kept short since
  // the real depth lives in subServices below.
  features: [
    {
      t: 'Firmware Engineering',
      d: 'Low-level firmware for microcontrollers built for power efficiency, reliability and safe over-the-air updates.'
    },
    {
      t: 'Sensor & Hardware Integration',
      d: 'Sensor selection, PCB-level integration and calibration so the data coming off the device is actually trustworthy.'
    },
    {
      t: 'Connectivity & Protocols',
      d: 'Wired and wireless connectivity chosen for the environment, not the demo — range, power draw and interference all factored in.'
    },
    {
      t: 'Cloud Ingestion & Visualization',
      d: 'Telemetry pipelines and dashboards that turn device data into alerts, trends and decisions in real time.'
    }
  ],

  // Powers the "Inside the discipline" deep-dive section on the detail
  // page. Each entry is a distinct engineering discipline with its own
  // real tactics — this is where the actual depth lives.
  subServices: [
    {
      title: 'Embedded Systems & Firmware Development',
      description:
        'Firmware is the layer that decides whether a device survives in the field for years or fails silently within weeks. We write for the constraints that actually matter on embedded hardware: limited memory, power budgets and the need for safe recovery when something goes wrong.',
      tactics: [
        'Bare-metal and RTOS firmware for ARM Cortex-M, ESP32 and STM32 platforms',
        'Power-optimization for battery- and solar-powered devices',
        'Bootloader design and secure over-the-air (OTA) firmware updates',
        'Hardware abstraction layers for portability across board revisions',
        'Watchdog timers, fault recovery and field-diagnostics logging'
      ]
    },
    {
      title: 'Sensor Integration & Hardware Design',
      description:
        'A dashboard is only as good as the sensor feeding it. We work at the PCB and hardware-selection level to make sure readings are accurate, drift-corrected and resilient to the environment they\'re deployed in.',
      tactics: [
        'Sensor selection and datasheet-level evaluation for accuracy, drift and lifespan',
        'PCB schematic review and hardware prototyping support',
        'Analog signal conditioning and noise filtering',
        'Calibration routines and environmental compensation (temperature, humidity)',
        'Enclosure and ingress-protection considerations for outdoor/industrial deployment'
      ]
    },
    {
      title: 'Device Connectivity & Communication Protocols',
      description:
        'Connectivity choices made in a lab rarely survive a real deployment. We select and implement the protocol stack based on range, power budget, bandwidth and how many devices actually need to talk to each other.',
      tactics: [
        'MQTT, CoAP and HTTP(S) implementation for device-to-cloud messaging',
        'LoRaWAN and Zigbee for low-power, long-range or mesh deployments',
        'BLE and Wi-Fi for short-range and consumer-facing devices',
        'Cellular (NB-IoT / LTE-M) connectivity for remote or mobile assets',
        'Gateway architecture for mixed-protocol device fleets'
      ]
    },
    {
      title: 'IoT Cloud Platforms & Data Pipelines',
      description:
        'Raw telemetry is worthless until it\'s structured, stored and queryable. We build the ingestion pipeline from device to cloud so data arrives clean, timestamped and ready for dashboards, alerts or downstream analytics.',
      tactics: [
        'AWS IoT Core, Azure IoT Hub and Google Cloud IoT pipeline architecture',
        'Time-series data modeling and storage (InfluxDB, TimescaleDB)',
        'Device shadow / digital twin state management',
        'Data normalization and schema design across heterogeneous devices',
        'Message queuing and buffering for intermittent connectivity'
      ]
    },
    {
      title: 'Real-Time Monitoring & Dashboards',
      description:
        'A device fleet is only manageable if someone can see what it\'s doing without SSHing into anything. We build dashboards and alerting that surface the handful of numbers that actually matter, not a wall of raw telemetry.',
      tactics: [
        'Custom dashboards with Grafana, or embedded into your own web app',
        'Threshold-based and anomaly-based alerting (email, SMS, webhook)',
        'Fleet-level views: device health, connectivity status, battery levels',
        'Historical trend analysis and exportable reporting',
        'Role-based access for operators, technicians and management'
      ]
    },
    {
      title: 'Edge Computing & Edge AI',
      description:
        'Not every decision can wait for a round trip to the cloud. We push inference and logic onto the device or a local gateway when latency, bandwidth or reliability demands it.',
      tactics: [
        'On-device inference with TensorFlow Lite / Edge Impulse',
        'Edge gateway architecture for local processing and cloud offload',
        'Local rule-based automation for latency-critical actions',
        'Bandwidth reduction through on-device filtering and pre-aggregation',
        'Offline-first design for intermittent or no connectivity'
      ]
    },
    {
      title: 'IoT Security & Device Management',
      description:
        'A connected device is an attack surface. We treat device identity, encryption and update management as first-class requirements, not an afterthought bolted on before launch.',
      tactics: [
        'Device identity and certificate-based authentication',
        'End-to-end encryption for data in transit and at rest',
        'Secure boot and firmware signing to prevent tampering',
        'Fleet provisioning and lifecycle management (onboarding to decommission)',
        'Vulnerability monitoring and coordinated patch rollout'
      ]
    },
    {
      title: 'Industrial IoT & Predictive Maintenance',
      description:
        'For manufacturing and industrial clients, the goal isn\'t just visibility — it\'s catching failures before they happen. We build monitoring systems that learn normal equipment behavior and flag deviations early.',
      tactics: [
        'Vibration, temperature and current-draw monitoring for rotating equipment',
        'Predictive maintenance models trained on historical failure data',
        'Integration with existing SCADA / PLC systems',
        'Downtime and OEE (Overall Equipment Effectiveness) reporting',
        'Retrofit sensor kits for legacy industrial equipment'
      ]
    }
  ]
};