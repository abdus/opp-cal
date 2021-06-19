let SessionLoad = 1
let s:so_save = &so | let s:siso_save = &siso | set so=0 siso=0
let v:this_session=expand("<sfile>:p")
silent only
cd ~/Dev/personal/opp-cal__personal
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
set shortmess=aoO
badd +192 pages/submit.tsx
badd +17 ~/Dev/personal/opp-cal__personal/pages/api/get-location-autocomplete.ts
argglobal
%argdel
edit pages/submit.tsx
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
setlocal fdl=9
setlocal fml=1
setlocal fdn=20
setlocal fen
22
normal! zo
51
normal! zo
52
normal! zo
54
normal! zo
55
normal! zo
58
normal! zo
61
normal! zo
63
normal! zo
103
normal! zo
112
normal! zo
113
normal! zo
119
normal! zo
131
normal! zo
145
normal! zo
148
normal! zo
149
normal! zo
150
normal! zo
156
normal! zo
157
normal! zo
158
normal! zo
164
normal! zo
169
normal! zo
179
normal! zo
188
normal! zo
189
normal! zo
199
normal! zo
213
normal! zo
215
normal! zo
230
normal! zo
244
normal! zo
256
normal! zo
265
normal! zo
267
normal! zo
282
normal! zo
296
normal! zo
305
normal! zo
let s:l = 161 - ((10 * winheight(0) + 23) / 46)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
161
normal! 041|
wincmd w
argglobal
if bufexists("~/Dev/personal/opp-cal__personal/pages/api/get-location-autocomplete.ts") | buffer ~/Dev/personal/opp-cal__personal/pages/api/get-location-autocomplete.ts | else | edit ~/Dev/personal/opp-cal__personal/pages/api/get-location-autocomplete.ts | endif
setlocal fdm=indent
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=2
setlocal fml=1
setlocal fdn=20
setlocal fen
16
normal! zo
let s:l = 8 - ((7 * winheight(0) + 23) / 46)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
8
normal! 04|
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
