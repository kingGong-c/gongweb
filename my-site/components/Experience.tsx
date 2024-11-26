export default function Experience() {
  return (
    <section>
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">경력</h2>
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">구름</h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">데브옵스 엔지니어 | 3년</p>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
          <dl className="sm:divide-y sm:divide-gray-200">
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">주요 업무</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                구름에서 3년 동안 데브옵스 엔지니어로 근무하며 다양한 프로젝트에 참여하였습니다.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}

