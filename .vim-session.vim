let SessionLoad = 1
let s:so_save = &so | let s:siso_save = &siso | set so=0 siso=0
let v:this_session=expand("<sfile>:p")
silent only
cd ~/Dev/personal/opp-cal__personal
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
set shortmess=aoO
badd +38 pages/calendar.tsx
badd +89 pages/index.tsx
argglobal
%argdel
edit pages/calendar.tsx
set splitbelow splitright
wincmd _ | wincmd |
vsplit
1wincmd h
wincmd w
wincmd t
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
exe 'vert 1resize ' . ((&columns * 119 + 119) / 239)
exe 'vert 2resize ' . ((&columns * 119 + 119) / 239)
argglobal
setlocal fdm=indent
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=4
setlocal fml=1
setlocal fdn=20
setlocal fen
21
normal! zo
22
normal! zo
23
normal! zo
32
normal! zo
35
normal! zo
49
normal! zo
56
normal! zo
let s:l = 38 - ((22 * winheight(0) + 23) / 46)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
38
normal! 042|
wincmd w
argglobal
if bufexists("pages/index.tsx") | buffer pages/index.tsx | else | edit pages/index.tsx | endif
setlocal fdm=indent
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
86
normal! zo
87
normal! zo
93
normal! zo
94
normal! zo
let s:l = 94 - ((93 * winheight(0) + 23) / 46)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
94
normal! 030|
wincmd w
exe 'vert 1resize ' . ((&columns * 119 + 119) / 239)
exe 'vert 2resize ' . ((&columns * 119 + 119) / 239)
tabnext 1
if exists('s:wipebuf') && getbufvar(s:wipebuf, '&buftype') isnot# 'terminal'
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20 winminheight=1 winminwidth=1 shortmess=filnxtToOFA
let s:sx = expand("<sfile>:p:r")."x.vim"
if file_readable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &so = s:so_save | let &siso = s:siso_save
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
