import { FaAws, FaGithub, FaDocker } from 'react-icons/fa'
import { SiKubernetes, SiAwsamplify } from 'react-icons/si'

const skills = [
  { name: "AWS EC2, S3 사용 경험", icon: FaAws, color: "bg-yellow-100" },
  { name: "GitHub Actions를 이용한 CI/CD", icon: FaGithub, color: "bg-purple-100" },
  { name: "쿠버네티스", icon: SiKubernetes, color: "bg-blue-100" },
  { name: "Docker", icon: FaDocker, color: "bg-sky-100" },
  { name: "AWS Amplify", icon: SiAwsamplify, color: "bg-orange-100" },
]

export default function Skills() {
  return (
    <section>
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">기술 스택</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <div key={index} className={`${skill.color} rounded-lg p-4 shadow transition-all duration-300 hover:shadow-md`}>
            <div className="flex items-center space-x-4">
              <skill.icon className="text-3xl text-gray-700" />
              <span className="text-sm sm:text-base font-medium text-gray-800">{skill.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

