import React, { useState, useRef, useEffect } from 'react';
import {
  Menu, Monitor, LayoutGrid, List, FolderOpen, Share2, Settings, ListTodo,
  Activity, ChevronDown, Search, RefreshCcw, Plus, ChevronRight,
  SlidersHorizontal, XCircle, FileText, Info, ChevronLeft,
  PlayCircle, MoreHorizontal, Upload, X, Download, Check, PlusSquare
} from 'lucide-react';

export default function App() {
  const [activePage, setActivePage] = useState<'device_management' | 'data_simulation'>('device_management');

  return (
    <div className="flex h-screen w-full bg-[#f0f2f5] font-sans text-sm text-slate-700">
      {/* Sidebar */}
      <aside className="w-64 flex-shrink-0 bg-[#e6e8eb] border-r border-slate-200 flex flex-col h-full bg-opacity-50">
        {/* Logo Area */}
        <div className="h-14 flex items-center px-4 bg-white border-b border-slate-200">
          <div className="flex items-center text-blue-600 font-bold text-xl tracking-tight">
            <span className="w-8 h-8 rounded-full border-2 border-blue-600 flex items-center justify-center mr-2 relative overflow-hidden">
               <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 absolute bottom-0 left-1"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.36 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3z"/></svg>
            </span>
            <span className="text-blue-700">NLE</span>Cloud
          </div>
        </div>

        {/* Menu Items */}
        <div className="flex-1 overflow-y-auto py-2">
          <NavItem icon={<Monitor size={18} />} title="平台总览" />
          <NavItem icon={<LayoutGrid size={18} />} title="系统管理" hasSubmenu />
          
          {/* Active Menu Section for 设备接入 */}
          <div className="mb-1">
             <div className="flex items-center px-6 py-3 bg-blue-600 text-white cursor-pointer justify-between shadow-sm">
                <div className="flex items-center gap-3">
                  <List size={18} />
                  <span>设备接入</span>
                </div>
                <ChevronDown size={14} />
             </div>
             <div className="bg-slate-200 bg-opacity-70 py-1">
                <div className="flex items-center pl-14 pr-6 py-2.5 text-slate-600 hover:bg-slate-300 hover:text-blue-600 cursor-pointer">
                  <span className="w-2 h-2 rounded-full border border-slate-400 mr-3 mb-0.5"></span>
                  产品管理
                </div>
                
                <div 
                   onClick={() => setActivePage('device_management')}
                   className={`flex items-center py-2.5 cursor-pointer ${
                      activePage === 'device_management' 
                      ? 'mx-2 pl-12 pr-4 bg-white text-blue-600 rounded-md shadow-sm' 
                      : 'pl-14 pr-6 text-slate-600 hover:bg-slate-300 hover:text-blue-600'
                   }`}>
                  <span className={`w-2 h-2 rounded-full border mr-3 mb-0.5 ${activePage === 'device_management' ? 'border-blue-600' : 'border-slate-400'}`}></span>
                  设备管理
                </div>

                <div className="flex items-center pl-14 pr-6 py-2.5 text-slate-600 hover:bg-slate-300 hover:text-blue-600 cursor-pointer">
                  <span className="w-2 h-2 rounded-full border border-slate-400 mr-3 mb-0.5"></span>
                  资产管理
                </div>
             </div>
          </div>
          
          {/* Expanded Submenu Category for 应用接入 */}
          <div className="mb-1">
             <div className="flex items-center px-6 py-3 text-slate-500 hover:bg-slate-200 cursor-pointer justify-between">
                <div className="flex items-center gap-3">
                  <FolderOpen size={18} />
                  <span>应用接入</span>
                </div>
                <ChevronDown size={14} />
             </div>
             <div className="bg-slate-200 bg-opacity-70 py-1">
                <div className="flex items-center pl-14 pr-6 py-2.5 text-slate-600 hover:bg-slate-300 hover:text-blue-600 cursor-pointer">
                  <span className="w-2 h-2 rounded-full border border-slate-400 mr-3 mb-0.5"></span>
                  项目管理
                </div>
                {/* 数据仿真 */}
                <div 
                   onClick={() => setActivePage('data_simulation')}
                   className={`flex items-center py-2.5 cursor-pointer ${
                      activePage === 'data_simulation' 
                      ? 'mx-2 pl-12 pr-4 bg-white text-blue-600 rounded-md shadow-sm' 
                      : 'pl-14 pr-6 text-slate-600 hover:bg-slate-300 hover:text-blue-600'
                   }`}>
                  <span className={`w-2 h-2 rounded-full border mr-3 mb-0.5 ${activePage === 'data_simulation' ? 'border-blue-600' : 'border-slate-400'}`}></span>
                  数据仿真
                </div>
             </div>
          </div>

          <NavItem icon={<Share2 size={18} />} title="应用设计" hasSubmenu />
          
          {/* Expanded Menu Section for 设备运维 */}
          <div className="mb-1">
             <div className="flex items-center px-6 py-3 text-slate-500 hover:bg-slate-200 cursor-pointer justify-between">
                <div className="flex items-center gap-3">
                  <Settings size={18} />
                  <span>设备运维</span>
                </div>
                <ChevronDown size={14} />
             </div>
             <div className="bg-slate-200 bg-opacity-70 py-1">
                <div className="flex items-center pl-14 pr-6 py-2.5 text-slate-600 hover:bg-slate-300 hover:text-blue-600 cursor-pointer">
                  <span className="w-2 h-2 rounded-full border border-slate-400 mr-3 mb-0.5"></span>
                  设备调试
                </div>
                <div className="flex items-center pl-14 pr-6 py-2.5 text-slate-600 hover:bg-slate-300 hover:text-blue-600 cursor-pointer">
                  <span className="w-2 h-2 rounded-full border border-slate-400 mr-3 mb-0.5"></span>
                  接口调试
                </div>
             </div>
          </div>

          <NavItem icon={<ListTodo size={18} />} title="设备任务" hasSubmenu />
          <NavItem icon={<Activity size={18} />} title="事件中心" hasSubmenu />
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden bg-[#f0f2f5]">
        {/* Header */}
        <header className="h-14 bg-white border-b border-slate-200 flex items-center justify-between px-4 flex-shrink-0">
           <div className="flex items-center gap-4">
             <button className="text-blue-500 p-1 hover:bg-blue-50 rounded">
               <Menu size={20} />
             </button>
             <div className="flex items-center text-slate-500 text-sm">
                <span>首页</span>
                <ChevronRight size={14} className="mx-1 text-slate-300" />
                <span>{activePage === 'device_management' ? '设备接入' : '应用接入'}</span>
                <ChevronRight size={14} className="mx-1 text-slate-300" />
                <span className="text-slate-700">{activePage === 'device_management' ? '设备管理' : '数据仿真'}</span>
             </div>
           </div>
           
           <div className="flex items-center text-slate-400 text-sm">
              <span className="mr-8 hidden sm:inline-block">领先的新一代数字技术教育科技企业</span>
              <div className="flex items-center text-slate-700 cursor-pointer hover:text-blue-600">
                <span>杨振邦</span>
                <ChevronDown size={14} className="ml-1" />
              </div>
           </div>
        </header>

        {/* Page Content */}
        {activePage === 'device_management' ? <DeviceManagementPage /> : <DataSimulationPage />}
      </main>
    </div>
  );
}

function DeviceManagementPage() {
  const [showImportModal, setShowImportModal] = useState(false);
  const [uploadedData, setUploadedData] = useState<{name: string, key: string, desc: string}[] | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      // Simulate file parsing delay
      setTimeout(() => {
        setUploadedData([
          { name: '卧室空调', key: 'AC_WD_001', desc: '按模板导入的新增加的设备' },
          { name: '客厅顶灯', key: 'LGT_LV_005', desc: '按模板导入的新增加的设备' },
          { name: '阳台传感器', key: 'SENS_BAL_02', desc: '按模板导入的新增加的设备' },
        ]);
      }, 600);
    }
  };

  const handleConfirmImport = () => {
    // Simulate submit result
    setShowImportModal(false);
    setUploadedData(null);
  };
  
  return (
    <div className="flex-1 overflow-auto p-4 sm:p-6 pb-20 relative">
      
      {/* Info Card */}
      <div className="bg-white rounded-sm shadow-sm border border-slate-200 mb-4 tracking-wide">
        <div className="px-6 py-4 flex items-center justify-between border-b border-slate-100">
           <div className="flex items-center">
              <div className="w-1 h-4 bg-orange-400 mr-3"></div>
              <h2 className="text-base font-medium text-slate-800">设备管理</h2>
           </div>
           <a href="#" className="flex items-center text-blue-500 hover:underline text-sm font-medium">查看帮助文档</a>
        </div>
        <div className="px-6 py-4">
           <div className="bg-slate-50 border border-slate-100 rounded px-4 py-3 text-slate-600 leading-relaxed">
              物理设备要连接到平台，需要先在平台创建设备，并获取连接到平台的鉴权信息。设备列表包含自主创建的设备，同时支持灵活的搜索和列表导出。
           </div>
        </div>
      </div>

      <div className="bg-white rounded-sm shadow-sm border border-slate-200">
        {/* Title */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center">
           <div className="w-1 h-4 bg-orange-400 mr-3"></div>
           <h2 className="text-base font-medium text-slate-800">查询设备</h2>
        </div>
        
        {/* Toolbar */}
        <div className="px-6 py-5 border-b border-slate-100">
           <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-6 text-sm">
                 <div className="flex items-center gap-1.5">
                    <label className="text-slate-600 whitespace-nowrap">设备类型：</label>
                    <div className="relative">
                       <select className="appearance-none border border-slate-300 rounded px-3 py-1.5 min-w-[140px] pr-8 text-slate-400 bg-white focus:outline-none focus:border-blue-500 hover:border-blue-400 transition-colors cursor-pointer">
                          <option>请选择</option>
                       </select>
                       <ChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                    </div>
                 </div>
                 
                 <div className="flex items-center gap-1.5">
                    <label className="text-slate-600 whitespace-nowrap">选择产品：</label>
                    <div className="relative">
                       <select className="appearance-none border border-slate-300 rounded px-3 py-1.5 min-w-[160px] pr-8 text-slate-400 bg-white focus:outline-none focus:border-blue-500 hover:border-blue-400 transition-colors cursor-pointer">
                          <option>请选择所属产品</option>
                       </select>
                       <ChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                    </div>
                 </div>
                 
                 <div className="flex items-center gap-1.5">
                    <label className="text-slate-600 whitespace-nowrap">设备名称：</label>
                    <input type="text" placeholder="请输入设备名称或相应的关键字" className="border border-slate-300 rounded px-3 py-1.5 w-60 focus:outline-none focus:border-blue-500 hover:border-blue-400 transition-colors placeholder-slate-300" />
                 </div>
                 
                 <div className="flex items-center gap-1.5">
                    <label className="text-slate-600 whitespace-nowrap">设备Key：</label>
                    <input type="text" placeholder="请输入设备key" className="border border-slate-300 rounded px-3 py-1.5 w-52 focus:outline-none focus:border-blue-500 hover:border-blue-400 transition-colors placeholder-slate-300" />
                 </div>
              </div>

              <div className="flex items-center gap-2">
                 <button className="flex items-center gap-1.5 px-4 py-1.5 border border-blue-200 bg-blue-50 text-blue-600 rounded-sm hover:bg-blue-100 transition-colors">
                    <Search size={14} />
                    查询
                 </button>
                 <button className="flex items-center gap-1.5 px-4 py-1.5 border border-blue-200 bg-blue-50 text-blue-600 rounded-sm hover:bg-blue-100 transition-colors">
                    <RefreshCcw size={14} />
                    重置
                 </button>
              </div>
           </div>
           
           <div className="mt-5 flex items-center gap-3">
              <button className="flex items-center gap-1.5 px-4 py-1.5 bg-blue-500 text-white rounded-sm hover:bg-blue-600 transition-colors shadow-sm font-medium">
                 <Plus size={16} />
                 新增设备
              </button>
              <button className="flex items-center gap-1.5 px-4 py-1.5 border border-red-200 bg-red-50 text-red-500 rounded-sm hover:bg-red-100 transition-colors shadow-sm font-medium">
                 <XCircle size={16} />
                 批量删除
              </button>
              <button className="flex items-center gap-1.5 px-4 py-1.5 border border-blue-200 bg-blue-50 text-blue-600 rounded-sm hover:bg-blue-100 transition-colors shadow-sm font-medium">
                 <Plus size={16} />
                 批量新增
              </button>
              <button onClick={() => setShowImportModal(true)} className="flex items-center gap-1.5 px-4 py-1.5 border border-blue-200 bg-blue-50 text-blue-600 rounded-sm hover:bg-blue-100 transition-colors shadow-sm font-medium">
                 <Upload size={16} />
                 导入
              </button>
           </div>
        </div>

        {/* Table */}
        <div className="w-full overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-100 text-slate-700 border-b border-slate-200">
                <th className="w-12 px-6 py-4 font-medium"><input type="checkbox" className="rounded-sm border-slate-300 text-blue-600 focus:ring-blue-500" /></th>
                <th className="px-4 py-4 font-medium whitespace-nowrap">序号</th>
                <th className="px-4 py-4 font-medium whitespace-nowrap">设备名称</th>
                <th className="px-4 py-4 font-medium whitespace-nowrap">归属产品</th>
                <th className="px-4 py-4 font-medium whitespace-nowrap">设备状态</th>
                <th className="px-4 py-4 font-medium whitespace-nowrap">设备描述</th>
                <th className="px-4 py-4 font-medium whitespace-nowrap">
                  <div className="flex items-center gap-1 cursor-pointer hover:text-slate-900">
                    添加时间
                    <div className="flex flex-col">
                       <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-slate-400 mb-[-2px] hover:text-blue-500"><path d="M18 15l-6-6-6 6"/></svg>
                       <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-slate-400 mt-[-2px] hover:text-blue-500"><path d="M6 9l6 6 6-6"/></svg>
                    </div>
                  </div>
                </th>
                <th className="px-4 py-4 font-medium whitespace-nowrap">操作</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {[
                { id: 1, name: '落地扇', product: '智能落地扇', status: '离线', desc: '', time: '2024-05-10 14:30:11' },
                { id: 2, name: '温湿度传感器', product: '温湿度传感器', status: '离线', desc: '', time: '2024-05-10 19:08:18' },
                { id: 3, name: '温湿度传感器1', product: '温湿度传感器', status: '离线', desc: '', time: '2024-07-17 14:57:30' },
                { id: 4, name: '塔石NB透传DTU', product: '塔石NB透传DTU', status: '离线', desc: '', time: '2024-09-29 17:22:40', info: true },
                { id: 5, name: '4路串口继电器', product: '4路串口继电器', status: '离线', desc: '', time: '2024-09-29 17:24:48' },
              ].map((row) => (
                <tr key={row.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4"><input type="checkbox" className="rounded-sm border-slate-300 text-blue-600 focus:ring-blue-500" /></td>
                  <td className="px-4 py-4 text-slate-500">{row.id}</td>
                  <td className="px-4 py-4">{row.name}</td>
                  <td className="px-4 py-4">{row.product}</td>
                  <td className="px-4 py-4">
                     <div className="flex items-center gap-1 text-slate-600">
                        {row.status}
                        {row.info && <Info size={14} className="text-blue-400 cursor-help" />}
                     </div>
                  </td>
                  <td className="px-4 py-4">{row.desc}</td>
                  <td className="px-4 py-4 text-slate-500">{row.time}</td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-3 text-blue-500">
                       <button className="flex items-center gap-1 hover:text-blue-600 group">
                         <FileText size={14} />
                         <span>详情</span>
                       </button>
                       <button className="flex items-center gap-1 hover:text-blue-600 group">
                         <SlidersHorizontal size={14} />
                         <span>编辑</span>
                       </button>
                       <button className="flex items-center gap-1 text-red-500 hover:text-red-600 group">
                         <XCircle size={14} />
                         <span>删除</span>
                       </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-6 py-4 border-t border-slate-100 flex items-center justify-between text-sm text-slate-600 bg-white">
           <div>共 5 条</div>
           <div className="flex items-center gap-3">
              <div className="relative">
                 <select className="appearance-none border border-slate-300 rounded px-3 py-1 pr-8 bg-white focus:outline-none focus:border-blue-500 cursor-pointer">
                    <option>10条/页</option>
                    <option>20条/页</option>
                    <option>50条/页</option>
                 </select>
                 <ChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
              </div>
              
              <div className="flex items-center gap-1">
                 <button className="p-1.5 border border-slate-200 rounded text-slate-400 cursor-not-allowed bg-slate-50">
                    <ChevronLeft size={14} />
                 </button>
                 <button className="px-3 py-1 border border-transparent rounded bg-blue-50 text-blue-600 font-medium">
                    1
                 </button>
                 <button className="p-1.5 border border-slate-200 rounded text-slate-400 cursor-not-allowed bg-slate-50">
                    <ChevronRight size={14} />
                 </button>
              </div>
              
              <div className="flex items-center gap-2">
                 <span>前往</span>
                 <input type="text" defaultValue="1" className="w-12 text-center border border-slate-300 rounded py-1 focus:outline-none focus:border-blue-500" />
                 <span>页</span>
              </div>
           </div>
        </div>
      </div>
      
      {/* Import Modal */}
      {showImportModal && (
         <div className="fixed inset-0 bg-slate-900/40 flex flex-col items-center justify-center z-50">
            <div className="bg-white rounded-md shadow-xl w-[640px] flex flex-col max-h-[90vh]">
               <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
                  <h3 className="text-base font-medium text-slate-800">导入设备</h3>
                  <button onClick={() => {setShowImportModal(false); setUploadedData(null);}} className="text-slate-400 hover:text-slate-600 p-1">
                    <X size={18} />
                  </button>
               </div>
               
               <div className="p-6 flex-1 overflow-y-auto w-full">
                  <div className="mb-6 flex items-center gap-4 text-sm w-full">
                     <label className="text-slate-700 w-24 text-right flex-shrink-0"><span className="text-red-500 mr-1">*</span>所属产品：</label>
                     <div className="relative flex-1">
                       <select className="w-full appearance-none border border-slate-300 rounded px-3 py-2 pr-8 text-slate-600 bg-white focus:outline-none focus:border-blue-500 hover:border-blue-400 cursor-pointer">
                          <option>请选择目标产品</option>
                          <option>智能落地扇</option>
                          <option>温湿度传感器</option>
                       </select>
                       <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                     </div>
                  </div>
                  
                  <div className="mb-6 flex items-start gap-4 text-sm w-full">
                     <label className="text-slate-700 w-24 text-right mt-1.5 flex-shrink-0"><span className="text-red-500 mr-1">*</span>上传文件：</label>
                     <div className="flex-1">
                        <input 
                           type="file" 
                           accept=".xlsx, .xls"
                           className="hidden" 
                           ref={fileInputRef}
                           onChange={handleFileUpload}
                        />
                        <button 
                           onClick={() => fileInputRef.current?.click()}
                           className="flex items-center gap-2 px-4 py-2 border border-blue-500 text-blue-500 bg-blue-50 rounded hover:bg-blue-100 transition-colors font-medium"
                        >
                           <Upload size={16} />
                           选择Excel文件
                        </button>
                        <p className="text-xs text-slate-400 mt-2.5">只能上传xlsx/xls文件，且不超过5MB，如有疑问请先下载 <a href="#" className="text-blue-500 hover:underline">模板文件</a></p>
                     </div>
                  </div>
                  
                  {uploadedData && (
                    <div className="mt-4 border border-slate-200 rounded text-sm w-full animate-in fade-in slide-in-from-bottom-2 duration-300">
                       <div className="bg-[#f0f2f5] px-4 py-2.5 border-b border-slate-200 font-medium text-slate-700 flex justify-between items-center">
                         <span>预览数据</span>
                         <span className="text-slate-500 font-normal">共解析 {uploadedData.length} 条</span>
                       </div>
                       <table className="w-full text-left table-fixed">
                          <thead>
                             <tr className="bg-slate-50 text-slate-600 border-b border-slate-200">
                                <th className="px-4 py-2.5 font-medium w-1/3">设备名称</th>
                                <th className="px-4 py-2.5 font-medium w-1/3">设备Key</th>
                                <th className="px-4 py-2.5 font-medium w-1/3">描述</th>
                             </tr>
                          </thead>
                          <tbody>
                             {uploadedData.map((row, i) => (
                                <tr key={i} className="border-b border-slate-100 last:border-0 hover:bg-slate-50">
                                   <td className="px-4 py-2.5 truncate">{row.name}</td>
                                   <td className="px-4 py-2.5 text-slate-500 font-mono text-xs truncate">{row.key}</td>
                                   <td className="px-4 py-2.5 text-slate-500 truncate">{row.desc}</td>
                                </tr>
                             ))}
                          </tbody>
                       </table>
                    </div>
                  )}
               </div>
               
               <div className="px-6 py-4 border-t border-slate-100 flex items-center justify-end gap-3 bg-white rounded-b">
                  <button onClick={() => {setShowImportModal(false); setUploadedData(null);}} className="px-5 py-1.5 border border-slate-300 rounded text-slate-600 hover:bg-slate-50 transition-colors font-medium">取消</button>
                  <button onClick={handleConfirmImport} className={`px-5 py-1.5 rounded transition-colors shadow-sm font-medium ${uploadedData ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-slate-200 text-slate-400 cursor-not-allowed'}`} disabled={!uploadedData}>确认导入</button>
               </div>
            </div>
         </div>
      )}
    </div>
  );
}

function DataSimulationPage() {
  const [expandedRowId, setExpandedRowId] = useState<number | null>(11);
  const [statusFilter, setStatusFilter] = useState('全部');
  
  const [modalType, setModalType] = useState<'import_upload' | 'import_progress' | 'export' | 'device_config' | 'run_logs' | null>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  
  const [showDeviceInnerConfig, setShowDeviceInnerConfig] = useState(false);
  const [deviceConfigMode, setDeviceConfigMode] = useState<'config' | 'file'>('config');
  const [configPropTab, setConfigPropTab] = useState<'hum' | 'tem'>('hum');

  useEffect(() => {
    if ((modalType === 'import_progress' || modalType === 'export') && currentStep < 2) {
      const timer = setTimeout(() => {
        setCurrentStep(prev => prev + 1);
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, [modalType, currentStep]);

  const closeAndReset = () => {
    setModalType(null);
    setCurrentStep(0);
    setSelectedFile(null);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleConfirmImport = () => {
    setModalType('import_progress');
  };

  const mockTasks = [
    { id: 11, name: '11', project: '智慧农业', time: '2025-08-15 15:20:30', status: '未启动', devices: 1, execType: '单次执行' },
    { id: 12, name: '水质温度模拟', project: '环境监测', time: '2025-08-16 09:12:00', status: '运行中', devices: 3, execType: '循环执行' },
    { id: 13, name: '产线电机振动测试', project: '工业制造', time: '2025-08-17 11:30:45', status: '已停止', devices: 5, execType: '单次执行' },
  ];

  return (
    <div className="flex-1 overflow-auto p-4 sm:p-6 pb-20">
      <div className="bg-white rounded-sm shadow-sm border border-slate-200">
        {/* Title */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center">
           <div className="w-1 h-4 bg-orange-400 mr-3"></div>
           <h2 className="text-base font-medium text-slate-800">数据仿真</h2>
        </div>
        
        {/* Toolbar */}
        <div className="px-6 py-5 border-b border-slate-100">
           <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-6 text-sm">
                 <div className="flex items-center gap-1.5">
                    <label className="text-slate-600 whitespace-nowrap">任务名：</label>
                    <input 
                       type="text" 
                       placeholder="请输入任务名" 
                       className="border border-slate-300 rounded px-3 py-1.5 w-48 focus:outline-none focus:border-blue-500 hover:border-blue-400 transition-colors placeholder-slate-300"
                    />
                 </div>
                 
                 <div className="flex items-center gap-1.5">
                    <label className="text-slate-600 whitespace-nowrap">所属项目：</label>
                    <div className="relative">
                       <select className="appearance-none border border-slate-300 rounded px-3 py-1.5 min-w-[160px] pr-8 text-slate-600 bg-white focus:outline-none focus:border-blue-500 hover:border-blue-400 transition-colors cursor-pointer">
                          <option>请选择所属项目</option>
                          <option>智慧农业</option>
                          <option>环境监测</option>
                          <option>工业制造</option>
                       </select>
                       <ChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                    </div>
                 </div>
                 
                 <div className="flex items-center gap-1.5">
                    <label className="text-slate-600 whitespace-nowrap mr-2">状态：</label>
                    <div className="flex items-center gap-4">
                       {['全部', '未启动', '运行中', '已停止'].map(status => (
                         <label key={status} className="flex items-center gap-1.5 cursor-pointer">
                            <input 
                              type="radio" 
                              name="status" 
                              value={status} 
                              checked={statusFilter === status} 
                              onChange={() => setStatusFilter(status)}
                              className="text-blue-600 focus:ring-blue-500 border-slate-300 cursor-pointer"
                            />
                            <span className="text-slate-600">{status}</span>
                         </label>
                       ))}
                    </div>
                 </div>
              </div>
              <div className="flex items-center gap-2">
                 <button className="flex items-center gap-1.5 px-4 py-1.5 border border-blue-500 text-blue-500 rounded hover:bg-blue-50 transition-colors">
                    <Search size={14} />
                    查询
                 </button>
                 <button className="flex items-center gap-1.5 px-4 py-1.5 border border-blue-500 text-blue-500 rounded hover:bg-blue-50 transition-colors">
                    <RefreshCcw size={14} />
                    重置
                 </button>
              </div>
           </div>
           
           <div className="mt-5 flex items-center gap-3">
              <button className="flex items-center gap-1.5 px-4 py-1.5 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors shadow-sm">
                 <Plus size={16} />
                 新增任务
              </button>
              <button onClick={() => setModalType('import_upload')} className="flex items-center gap-1.5 px-4 py-1.5 border border-blue-200 bg-blue-50 text-blue-600 rounded-sm hover:bg-blue-100 transition-colors shadow-sm">
                 <Upload size={16} />
                 导入任务
              </button>
              <button onClick={() => setModalType('export')} className="flex items-center gap-1.5 px-4 py-1.5 border border-blue-200 bg-blue-50 text-blue-600 rounded-sm hover:bg-blue-100 transition-colors shadow-sm">
                 <Download size={16} />
                 批量导出
              </button>
           </div>
        </div>

        {/* Table */}
        <div className="w-full overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-100 text-slate-700 border-b border-slate-200">
                <th className="w-12 px-6 py-3 font-medium"><input type="checkbox" className="rounded-sm border-slate-300 text-blue-600 focus:ring-blue-500" /></th>
                <th className="w-12 px-2 py-3 font-medium"></th>
                <th className="px-4 py-3 font-medium min-w-[120px]">任务名称</th>
                <th className="px-4 py-3 font-medium min-w-[120px]">所属项目</th>
                <th className="px-4 py-3 font-medium min-w-[150px]">创建时间</th>
                <th className="px-4 py-3 font-medium min-w-[100px]">状态</th>
                <th className="px-4 py-3 font-medium min-w-[80px]">设备数</th>
                <th className="px-4 py-3 font-medium min-w-[100px]">执行方式</th>
                <th className="px-4 py-3 font-medium min-w-[300px]">操作</th>
              </tr>
            </thead>
            <tbody>
              {mockTasks.map((task) => (
                <React.Fragment key={task.id}>
                  <tr className={`border-b border-slate-100 hover:bg-slate-50 transition-colors ${expandedRowId === task.id ? 'bg-slate-50' : ''}`}>
                    <td className="px-6 py-3"><input type="checkbox" className="rounded-sm border-slate-300 text-blue-600 focus:ring-blue-500" /></td>
                    <td className="px-2 py-3 text-center cursor-pointer text-slate-400 hover:text-blue-500" onClick={() => setExpandedRowId(expandedRowId === task.id ? null : task.id)}>
                      <ChevronDown size={16} className={`transform transition-transform ${expandedRowId === task.id ? '' : '-rotate-90'}`} />
                    </td>
                    <td className="px-4 py-3">{task.name}</td>
                    <td className="px-4 py-3">{task.project}</td>
                    <td className="px-4 py-3">{task.time}</td>
                    <td className="px-4 py-3">
                       <span className={`px-2 py-1 rounded text-xs ${
                          task.status === '运行中' ? 'bg-green-100 text-green-700' :
                          task.status === '已停止' ? 'bg-red-100 text-red-700' :
                          'bg-slate-100 text-slate-700'
                       }`}>
                          {task.status}
                       </span>
                    </td>
                    <td className="px-4 py-3">{task.devices}</td>
                    <td className="px-4 py-3">{task.execType}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-4 text-blue-500">
                         <button className="flex items-center gap-1 hover:text-blue-600 group">
                           <SlidersHorizontal size={14} />
                           <span>编辑</span>
                         </button>
                         <button onClick={() => setModalType('device_config')} className="flex items-center gap-1 hover:text-blue-600 group">
                           <Settings size={14} />
                           <span>任务配置</span>
                         </button>
                         {task.status !== '运行中' && (
                           <button className="flex items-center gap-1 hover:text-blue-600 group">
                             <PlayCircle size={14} />
                             <span>启动</span>
                           </button>
                         )}
                         <button onClick={() => setModalType('run_logs')} className="flex items-center gap-1 hover:text-blue-600 group">
                           <FileText size={14} />
                           <span>运行日志</span>
                         </button>
                         <button className="flex items-center gap-1 text-red-500 hover:text-red-600 group">
                           <XCircle size={14} />
                           <span>删除</span>
                         </button>
                      </div>
                    </td>
                  </tr>
                  
                  {/* Expanded Row */}
                  {expandedRowId === task.id && (
                    <tr className="bg-[#f8f9fb]">
                      <td colSpan={9} className="p-4 relative">
                         {/* Connector line graphic context */}
                         <div className="absolute left-[70px] top-0 bottom-4 w-px bg-slate-200"></div>
                         <div className="absolute left-[70px] top-10 w-4 h-px bg-slate-200"></div>
                         
                         <div className="ml-20 max-w-sm">
                            <div className="bg-white border text-sm border-slate-200 rounded shadow-sm overflow-hidden flex flex-col">
                               <div className="bg-[#f1f4f9] px-4 py-3 text-center border-b border-slate-200 text-slate-700 font-medium">
                                 温湿度传感器1
                               </div>
                               <div className="p-4 space-y-3">
                                  <div className="flex items-start">
                                    <span className="text-slate-500 w-16 flex-shrink-0">设备号：</span>
                                    <span className="text-slate-800 break-all">6C4768CEA56F49DB</span>
                                  </div>
                                  <div className="flex items-start relative group">
                                    <span className="text-slate-500 w-16 flex-shrink-0">湿度：</span>
                                    <div className="flex-1 flex items-center justify-between cursor-help">
                                      <span></span>
                                      <div className="relative">
                                         <MoreHorizontal size={16} className="text-slate-400 hover:text-blue-500" />
                                         
                                         {/* Custom Tooltip */}
                                         <div className="absolute top-1/2 -translate-y-1/2 left-full ml-3 hidden group-hover:block z-10 w-40">
                                            {/* Arrow */}
                                            <div className="absolute top-1/2 -translate-y-1/2 -left-1 w-2 h-2 bg-[#2d3238] transform rotate-45"></div>
                                            {/* Content */}
                                            <div className="bg-[#2d3238] text-white text-xs rounded px-3 py-2 relative shadow-lg">
                                               <div className="mb-0.5">湿度: %RH</div>
                                               <div>温度: ℃</div>
                                            </div>
                                         </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex items-start">
                                    <span className="text-slate-500 w-16 flex-shrink-0">时间：</span>
                                    <span></span>
                                  </div>
                               </div>
                            </div>
                         </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-6 py-4 border-t border-slate-100 flex items-center justify-between text-sm text-slate-600 bg-white">
           <div>共 {mockTasks.length} 条</div>
           <div className="flex items-center gap-3">
              <div className="relative">
                 <select className="appearance-none border border-slate-300 rounded px-3 py-1 pr-8 bg-white focus:outline-none focus:border-blue-500 cursor-pointer">
                    <option>10条/页</option>
                    <option>20条/页</option>
                    <option>50条/页</option>
                 </select>
                 <ChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
              </div>
              
              <div className="flex items-center gap-1">
                 <button className="p-1.5 border border-slate-200 rounded text-slate-400 cursor-not-allowed bg-slate-50">
                    <ChevronLeft size={14} />
                 </button>
                 <button className="px-3 py-1 border border-transparent rounded bg-blue-50 text-blue-600 font-medium">
                    1
                 </button>
                 <button className="p-1.5 border border-slate-200 rounded text-slate-400 cursor-not-allowed bg-slate-50">
                    <ChevronRight size={14} />
                 </button>
              </div>
              
              <div className="flex items-center gap-2">
                 <span>前往</span>
                 <input type="text" defaultValue="1" className="w-12 text-center border border-slate-300 rounded py-1 focus:outline-none focus:border-blue-500" />
                 <span>页</span>
              </div>
           </div>
        </div>

      </div>

      {/* Device Config Modal */}
      {modalType === 'device_config' && (
         <div className="fixed inset-0 bg-slate-900/40 z-[50] flex flex-col items-center justify-center p-6">
            <div className="w-[70%] max-w-5xl bg-white rounded-md shadow-xl flex flex-col relative max-h-[90vh] overflow-hidden">
               <button onClick={closeAndReset} className="absolute right-6 top-6 text-slate-400 hover:text-slate-600">
                 <X size={20} />
               </button>
               <h2 className="text-[16px] font-medium text-slate-800 text-center py-5 border-b border-slate-100 tracking-wide">设备配置</h2>
               
               <div className="p-6 overflow-auto bg-white">
                  <div className="mb-4">
                     <button className="flex items-center gap-1.5 px-4 py-2 bg-[#2d5ef8] text-white rounded shadow-sm text-sm hover:bg-[#1e4be6] transition-colors tracking-wide">
                        <PlusSquare size={16} />
                        新增设备
                     </button>
                  </div>

                  <table className="w-full text-left border-collapse">
                     <thead>
                        <tr className="text-[#8c919c] font-medium border-b border-slate-200 text-[15px] tracking-wide">
                           <th className="py-4 font-normal w-1/4">设备名称</th>
                           <th className="py-4 font-normal w-1/3">设备标识</th>
                           <th className="py-4 font-normal w-1/4">产品名称</th>
                           <th className="py-4 font-normal w-[150px]">操作</th>
                        </tr>
                     </thead>
                     <tbody className="text-[14px]">
                        {[1, 2, 3, 4].map(idx => (
                        <tr key={idx} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                           <td className="py-4 text-[#5f6472]">温湿度传感器{idx}</td>
                           <td className="py-4 text-[#5f6472]">6C4768CEA56F49DB</td>
                           <td className="py-4 text-[#5f6472]">温湿度传感器</td>
                           <td className="py-4">
                              <div className="flex items-center gap-6">
                                 <button onClick={() => setShowDeviceInnerConfig(true)} className="flex items-center gap-1.5 text-[#2d5ef8] hover:text-blue-600 transition-colors">
                                    <SlidersHorizontal size={15} />
                                    <span>配置</span>
                                 </button>
                                 <button className="flex items-center gap-1.5 text-[#f53f3f] hover:text-red-600 transition-colors">
                                    <XCircle size={15} />
                                    <span>移除</span>
                                 </button>
                              </div>
                           </td>
                        </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
            </div>
         </div>
      )}

      {/* Device Inner Config Modal */}
      {showDeviceInnerConfig && (
        <div className="fixed inset-0 bg-slate-900/40 z-[60] flex items-center justify-center">
           <div className="bg-white rounded-md shadow-xl w-[560px] flex flex-col relative max-h-[90vh]">
              <button onClick={() => setShowDeviceInnerConfig(false)} className="absolute right-4 top-4 text-slate-400 hover:text-slate-600">
                 <X size={18} strokeWidth={1.5} />
              </button>
              <h3 className="text-base font-medium text-slate-800 text-center py-5 z-10">设备配置</h3>
              
              <div className="flex border-t border-slate-100 flex-1 overflow-hidden">
                 {/* Left sidebar */}
                 <div className="w-[140px] border-r border-slate-100 py-6 flex flex-col">
                    <div className="px-6 mb-6">
                       <div className="text-slate-800 font-medium mb-1.5 text-sm">当前设备：</div>
                       <div className="text-blue-600 text-[13px] font-medium break-all">温湿度传感器1</div>
                    </div>
                    {deviceConfigMode === 'config' && (
                       <>
                          <div 
                             onClick={() => setConfigPropTab('hum')}
                             className={`py-3 px-6 cursor-pointer border-l-2 transition-colors flex flex-col items-start ${configPropTab === 'hum' ? 'border-blue-600 text-blue-600 bg-blue-50/50 relative after:content-[""] after:h-px after:w-full after:bg-slate-100 after:absolute after:-bottom-px after:left-0' : 'border-transparent text-slate-500 hover:bg-slate-50 border-b border-slate-100'}`}
                          >
                             <div className="mb-0.5 text-[14px]">湿度</div>
                             <div className="text-[13px] text-blue-500 font-normal opacity-80">hum</div>
                          </div>
                          <div 
                             onClick={() => setConfigPropTab('tem')}
                             className={`py-3 px-6 cursor-pointer border-l-2 transition-colors flex flex-col items-start ${configPropTab === 'tem' ? 'border-blue-600 text-blue-600 bg-blue-50/50' : 'border-transparent text-slate-500 hover:bg-slate-50'}`}
                          >
                             <div className="mb-0.5 text-[14px]">温度</div>
                             <div className="text-[13px] text-slate-400 font-normal">tem</div>
                          </div>
                       </>
                    )}
                 </div>
                 
                 {/* Right content */}
                 <div className="flex-1 p-6 pr-8 overflow-y-auto">
                    <div className="mb-6 flex items-center gap-6 text-[13px]">
                       <span className="text-slate-600 whitespace-nowrap">配置方式：</span>
                       <label className="flex items-center gap-1.5 cursor-pointer">
                          <input type="radio" checked={deviceConfigMode === 'config'} onChange={() => setDeviceConfigMode('config')} className="text-blue-600 focus:ring-blue-500" />
                          <span className="text-slate-700">按配置</span>
                       </label>
                       <label className="flex items-center gap-1.5 cursor-pointer">
                          <input type="radio" checked={deviceConfigMode === 'file'} onChange={() => setDeviceConfigMode('file')} className="text-blue-600 focus:ring-blue-500" />
                          <span className="text-slate-700">按文件</span>
                       </label>
                    </div>
                    
                    {deviceConfigMode === 'config' ? (
                       <>
                          <div className="mb-6">
                             <div className="text-slate-500 text-[13px] mb-2">数值类型：</div>
                             <div className="relative">
                                <select className="w-full appearance-none border border-slate-300 rounded px-3 py-2 bg-white text-slate-700 outline-none text-sm focus:border-blue-500">
                                   <option>随机值</option>
                                </select>
                                <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                             </div>
                          </div>
                          <div>
                             <div className="text-slate-500 text-[13px] mb-2">值范围：</div>
                             <div className="flex items-center">
                                <input type="text" defaultValue="0" className="w-[120px] border border-slate-300 rounded px-3 py-1.5 focus:outline-none focus:border-blue-500 text-sm text-slate-700 text-center" />
                                <span className="text-slate-400 mx-3">-</span>
                                <input type="text" defaultValue="100" className="w-[120px] border border-slate-300 rounded px-3 py-1.5 focus:outline-none focus:border-blue-500 text-sm text-slate-700 text-center" />
                                <span className="text-slate-500 ml-3 text-sm">%RH</span>
                             </div>
                          </div>
                       </>
                    ) : (
                       <>
                         <div className="mb-6">
                             <div className="text-slate-600 text-[13px] mb-2">数据文件：</div>
                             <div className="flex flex-col gap-2">
                                <div className="flex items-center gap-3">
                                   <button className="px-4 py-1.5 border border-blue-500 text-blue-500 rounded flex items-center gap-1.5 text-[13px] hover:bg-blue-50 transition-colors">
                                      <Upload size={14} /> 上传Excel
                                   </button>
                                   <a href="#" className="text-blue-500 text-[13px] hover:underline">下载模板</a>
                                </div>
                                <div className="text-xs text-slate-400 mt-1">支持xlsx/xls格式数据上传</div>
                             </div>
                          </div>
                          <div>
                             <div className="text-slate-600 text-[13px] mb-3">推送完成：</div>
                             <div className="flex gap-6">
                                <label className="flex items-center gap-1.5 cursor-pointer text-[13px] text-slate-700">
                                   <input type="radio" name="pushMode" defaultChecked className="text-blue-600 focus:ring-blue-500" />
                                   <span>循环推送</span>
                                </label>
                                <label className="flex items-center gap-1.5 cursor-pointer text-[13px] text-slate-700">
                                   <input type="radio" name="pushMode" className="text-blue-600 focus:ring-blue-500" />
                                   <span>停止推送</span>
                                </label>
                             </div>
                          </div>
                       </>
                    )}
                 </div>
              </div>
              
              <div className="px-6 py-5 flex justify-center gap-4 bg-white rounded-b-md">
                 <button onClick={() => setShowDeviceInnerConfig(false)} className="px-8 py-2 bg-slate-100 text-slate-700 font-medium rounded-sm hover:bg-slate-200 text-sm transition-colors">取消</button>
                 <button onClick={() => setShowDeviceInnerConfig(false)} className="px-8 py-2 bg-[#2d5ef8] text-white font-medium rounded-sm hover:bg-blue-700 text-sm transition-colors shadow-sm">确定</button>
              </div>
           </div>
        </div>
      )}

      {/* Import Upload Modal */}
      {modalType === 'import_upload' && (
         <div className="fixed inset-0 bg-slate-900/40 flex flex-col items-center justify-center z-50">
            <div className="bg-white rounded-md shadow-xl w-[560px] flex flex-col">
               <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
                  <h3 className="text-base font-medium text-slate-800">导入任务</h3>
                  <button onClick={closeAndReset} className="text-slate-400 hover:text-slate-600 p-1">
                    <X size={18} />
                  </button>
               </div>
               
               <div className="p-8 flex-1">
                  <div className="flex items-start gap-4 text-sm w-full">
                     <label className="text-slate-700 w-24 text-right mt-1.5 flex-shrink-0"><span className="text-red-500 mr-1">*</span>上传文件：</label>
                     <div className="flex-1">
                        <input 
                           type="file"
                           className="hidden" 
                           ref={fileInputRef}
                           onChange={handleFileUpload}
                        />
                        <button 
                           onClick={() => fileInputRef.current?.click()}
                           className="flex items-center gap-2 px-4 py-2 border border-blue-500 text-blue-500 bg-blue-50 rounded hover:bg-blue-100 transition-colors font-medium"
                        >
                           <Upload size={16} />
                           选择任务文件
                        </button>
                        <p className="text-xs text-slate-400 mt-2.5">只能上传单个任务配置文件</p>
                        
                        {selectedFile && (
                           <div className="mt-4 p-3 bg-slate-50 border border-slate-200 rounded flex items-center justify-between">
                              <span className="text-slate-700 truncate mr-4">{selectedFile.name}</span>
                              <button onClick={() => setSelectedFile(null)} className="text-slate-400 hover:text-red-500 flex-shrink-0">
                                 <X size={16} />
                              </button>
                           </div>
                        )}
                     </div>
                  </div>
               </div>
               
               <div className="px-6 py-4 border-t border-slate-100 flex items-center justify-end gap-3 bg-slate-50 rounded-b">
                  <button onClick={closeAndReset} className="px-5 py-1.5 border border-slate-300 rounded text-slate-600 hover:bg-white transition-colors font-medium">取消</button>
                  <button onClick={handleConfirmImport} className={`px-5 py-1.5 rounded transition-colors shadow-sm font-medium ${selectedFile ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-slate-200 text-slate-400 cursor-not-allowed'}`} disabled={!selectedFile}>确认导入</button>
               </div>
            </div>
         </div>
      )}

      {/* Progress Modal */}
      {(modalType === 'import_progress' || modalType === 'export') && (
        <div className="fixed inset-0 bg-slate-900/40 flex flex-col items-center justify-center z-50">
          <div className="bg-white rounded-md shadow-xl w-[560px] flex flex-col">
             <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
                <h3 className="text-base font-medium text-slate-800">
                  {modalType === 'import_progress' ? '导入任务' : '导出任务'}
                </h3>
                <button onClick={closeAndReset} className="text-slate-400 hover:text-slate-600 p-1 rounded hover:bg-slate-50 transition-colors">
                  <X size={18} />
                </button>
             </div>
             <div className="p-10 pb-12">
                <div className="flex justify-between relative mx-8">
                   {/* Background connecting line */}
                   <div className="absolute top-4 left-4 right-4 h-0.5 bg-slate-200 z-0">
                      {/* Active progress line */}
                      <div 
                         className="h-full bg-blue-500 transition-all duration-500 ease-in-out" 
                         style={{ width: currentStep === 0 ? '0%' : currentStep === 1 ? '50%' : '100%' }}
                      ></div>
                   </div>
                   
                   {[
                     { title: '任务信息' },
                     { title: '任务配置' },
                     { title: modalType === 'import_progress' ? '导入完成' : '导出完成' },
                   ].map((step, index) => (
                      <div key={index} className="flex flex-col items-center z-10 relative bg-white px-2">
                         <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium border-2 transition-colors duration-300 ${
                            currentStep > index ? 'border-blue-500 bg-blue-500 text-white' :
                            currentStep === index ? 'border-blue-500 bg-white text-blue-500' :
                            'border-slate-200 bg-white text-slate-400'
                         }`}>
                            {currentStep > index ? <Check size={16} strokeWidth={3} /> : index + 1}
                         </div>
                         <div className={`mt-3 text-sm font-medium absolute top-full w-24 text-center mt-3 ${currentStep >= index ? 'text-slate-700' : 'text-slate-400'}`}>
                           {step.title}
                         </div>
                      </div>
                   ))}
                </div>

                <div className="mt-20 text-center text-slate-600 min-h-[60px] flex flex-col items-center justify-center">
                   {currentStep === 0 && <p className="flex items-center justify-center gap-2"><RefreshCcw size={16} className="animate-spin text-blue-500" /> 正在处理{modalType === 'import_progress' ? '导入' : '导出'}的主体任务信息，请稍候...</p>}
                   {currentStep === 1 && <p className="flex items-center justify-center gap-2"><RefreshCcw size={16} className="animate-spin text-blue-500" /> 正在处理从属的任务配置参数，请稍候...</p>}
                   {currentStep === 2 && (
                     <div className="flex flex-col items-center animate-in fade-in zoom-in duration-300">
                        <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-500 mb-3 shadow-inner">
                           <Check size={28} strokeWidth={3} />
                        </div>
                        <p className="font-medium text-slate-800 text-lg">
                           {modalType === 'import_progress' ? '任务导入成功' : '任务导出成功'}
                        </p>
                     </div>
                   )}
                </div>
             </div>

             {currentStep === 2 && (
             <div className="px-6 py-4 border-t border-slate-100 flex items-center justify-center gap-4 bg-slate-50 rounded-b">
                {modalType === 'import_progress' ? (
                   <button onClick={closeAndReset} className="px-8 py-2 bg-blue-500 text-white rounded-sm hover:bg-blue-600 transition-colors shadow-sm font-medium">
                      确认
                   </button>
                ) : (
                   <button onClick={closeAndReset} className="flex items-center gap-2 px-6 py-2 bg-blue-500 text-white rounded-sm hover:bg-blue-600 transition-colors shadow-sm font-medium">
                      <Download size={16} />
                      下载文件
                   </button>
                )}
             </div>
             )}
          </div>
        </div>
      )}

      {/* Run Logs Modal */}
      {modalType === 'run_logs' && (
        <div className="fixed inset-0 bg-slate-900/40 z-[70] flex flex-col items-center justify-center p-6">
          <div className="w-[800px] bg-white rounded-md shadow-xl flex flex-col relative max-h-[85vh] overflow-hidden">
             <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
                <h3 className="text-base font-medium text-slate-800">运行日志</h3>
                <button onClick={closeAndReset} className="text-slate-400 hover:text-slate-600 p-1">
                  <X size={18} />
                </button>
             </div>
             <div className="p-4 flex-1 overflow-auto bg-slate-50">
               <div className="bg-white border border-slate-200 rounded shadow-sm overflow-hidden text-sm">
                 <div className="px-4 py-3 border-b border-slate-100 flex justify-between bg-slate-50/50">
                    <span className="text-slate-600 font-medium">最近50条执行记录</span>
                 </div>
                 <div className="max-h-[500px] overflow-y-auto">
                   <table className="w-full text-left">
                     <thead className="bg-[#f8f9fb] text-slate-500 sticky top-0 border-b border-slate-100 shadow-sm">
                       <tr>
                         <th className="px-4 py-3 font-normal w-[180px]">执行时间</th>
                         <th className="px-4 py-3 font-normal w-[120px]">执行设备</th>
                         <th className="px-4 py-3 font-normal">日志内容</th>
                       </tr>
                     </thead>
                     <tbody className="divide-y divide-slate-100">
                       {Array.from({ length: 50 }).map((_, i) => (
                         <tr key={i} className="hover:bg-slate-50 transition-colors">
                           <td className="px-4 py-3 text-slate-600">
                             2026-05-18 13:{Math.floor(i / 10).toString().padStart(2, '0')}:{Math.floor((i * 3) % 60).toString().padStart(2, '0')}
                           </td>
                           <td className="px-4 py-3 text-slate-600">温湿度传感器{(i % 4) + 1}</td>
                           <td className="px-4 py-3 font-mono text-[13px] pb-[12px]"><span className="text-[#2d5ef8]">{"{"} hum: {40 + (i % 30)}, tem: {15 + (i % 15)} {"}"}</span> <span className="text-slate-500 ml-2">数据推送成功</span></td>
                         </tr>
                       ))}
                     </tbody>
                   </table>
                 </div>
               </div>
             </div>
             <div className="px-6 py-4 flex justify-center bg-white rounded-b">
                <button onClick={closeAndReset} className="px-8 py-2 bg-[#2d5ef8] text-white font-medium rounded-sm hover:bg-blue-600 text-sm transition-colors shadow-sm">关闭</button>
             </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Helper component for simple sidebar items
function NavItem({ icon, title, hasSubmenu = false }: { icon: React.ReactNode, title: string, hasSubmenu?: boolean }) {
  return (
    <div className="flex items-center px-6 py-3 text-slate-600 hover:bg-slate-200 cursor-pointer justify-between transition-colors">
      <div className="flex items-center gap-3">
        {icon}
        <span>{title}</span>
      </div>
      {hasSubmenu && <ChevronDown size={14} className="text-slate-400" />}
    </div>
  );
}
