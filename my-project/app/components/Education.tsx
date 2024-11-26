export default function Education() {
  return (
    <section>
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">학력</h2>
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">영남이공대학교</h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">사이버보안학과</p>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
          <dl className="sm:divide-y sm:divide-gray-200">
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">전공</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">사이버보안</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}

